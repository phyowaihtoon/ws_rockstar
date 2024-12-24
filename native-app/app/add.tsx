import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { Link, router } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import Post from "../model/Post";
import { useTheme }  from "@react-navigation/native";

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	input: {
		height: 100,
		borderColor: "gray",
		borderWidth: 1,
		marginBottom: 10,
		padding: 10,
		fontSize: 18,
	},
	button: {
		backgroundColor: "blue",
		padding: 10,
		alignItems: "center",
	},
	buttonText: {
		color: "white",
	},
});

const postContent = async (content: string) => {
	const res = await fetch("http://172.30.27.119:8088/posts", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ content }),
	});

	if (!res.ok) {
		throw new Error("Network res was not ok");
	}

	return res.json();
};

export default function Add() {
    const { colors } = useTheme();
	const { control, handleSubmit } = useForm();
	const queryClient = useQueryClient();

	const onSubmit = (data: any) => {
		add.mutate(data.content);
		router.push("../");
	};

	const add = useMutation(postContent, {
		onSuccess: async item => {
			await queryClient.cancelQueries("posts");
			await queryClient.setQueryData<Post[] | undefined>("posts", old => {
                return old ? [...old, item] : [item];
            });
		},
		onError: error => {
			console.error("Error posting content:", error);
		},
	});

	return (
		<View style={styles.container}>
			<Controller
				control={control}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						style={[styles.input,{color: colors.text, borderColor : colors.border}]}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
						placeholder="Enter content"
						multiline
					/>
				)}
				name="content"
				defaultValue=""
			/>
			<Button
				title="Submit"
				onPress={handleSubmit(onSubmit)}
			/>

			<View style={{ marginTop: 10 }}>
				<Link
					href="../"
					style={{ textAlign: "center" }}>
					Cancel
				</Link>
			</View>
		</View>
	);
}