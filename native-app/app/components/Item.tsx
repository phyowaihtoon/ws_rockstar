import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import Post from "../model/Post";
import { useMutation, useQueryClient } from "react-query";


const styles = StyleSheet.create({
	card: {
		padding: 15,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
	},
	cardHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
        alignItems: "center",
		marginBottom: 5,
	},
	author: {
		flexDirection: "row",
		gap: 5,
		alignItems: "center",
	},
	time: {
		color: "gray",
	},
	authorName: {
		fontWeight: "bold",
		fontSize: 16,
	},
	content: {
		fontSize: 16,
		lineHeight: 26,
	},
});

const api = "http://172.30.27.119:8088/posts";

async function deletePost(id:number) {
	const res = await fetch(`${api}/${id}`,{
	  method:'DELETE'
	});

	if(!res.ok) {
		throw new Error("Network response was not ok");
	}
  
	return res.json();
  }

export default function Item({item} : {item : Post}) {

	const queryClient = useQueryClient();
	const remove = useMutation(deletePost,{
		onMutate : async id => {
			await queryClient.cancelQueries("posts");
			await queryClient.setQueryData<Post[] | undefined>("posts", old => {
				return old?.filter( post => post.id != id);
			});
		}
	});

	return (
		<View style={styles.card}>
			<View style={styles.cardHeader}>
				<View style={styles.author}>
					<Ionicons
						name="person-circle"
						size={32}
						color="#F72C5B"
					/>
					<Text style={styles.authorName}>{item.user.name}</Text>
					<Text style={styles.time}>4h</Text>
				</View>
				<TouchableOpacity onPress={() => remove.mutate(item.id)}>
					<Ionicons
						name="trash-outline"
						color="gray"
						size={18}
					/>
				</TouchableOpacity>
			</View>
			<View style={{ paddingLeft: 37 }}>
				<Text style={styles.content}>
				{item.content}
				</Text>

				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						marginTop: 10,
					}}>
					<View style={{ flexDirection: "row", gap: 8 }}>
						<TouchableOpacity>
							<Ionicons
								name="heart-outline"
								size={18}
								color="red"
							/>
						</TouchableOpacity>
						<Text style={{ color: "gray" }}>12</Text>
					</View>
					<View style={{ flexDirection: "row", gap: 8 }}>
						<TouchableOpacity>
							<Ionicons
								name="chatbubble-outline"
								size={18}
								color="green"
							/>
						</TouchableOpacity>
						<Text style={{ color: "gray" }}>5</Text>
					</View>

					<TouchableOpacity>
						<Ionicons
							name="share-social-outline"
							size={18}
							color="gray"
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<Ionicons
							name="ellipsis-vertical-outline"
							size={18}
							color="gray"
						/>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}
