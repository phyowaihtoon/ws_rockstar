import { Text as DefaultText , StyleProp, TextStyle} from "react-native";
import { useTheme }  from "@react-navigation/native";
import React from "react";

type TextProps = {
    style? : StyleProp<TextStyle>;
    children : String | React.ReactNode;
}

export default function Text ({style, children} : TextProps) {
    const { colors } = useTheme();

    return (
        <DefaultText style ={{ color : colors.text}}>
            {children}
        </DefaultText>
    );
}