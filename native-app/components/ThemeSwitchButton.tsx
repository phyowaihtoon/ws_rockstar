import Ionicons from "@expo/vector-icons/Ionicons";
import {useTheme} from "./ThemeProvider";
import {TouchableOpacity} from "react-native";

export const ThemeSwitchButton = () => {
    const {isDark,toggleTheme} = useTheme();

    return (
        <TouchableOpacity onPress={toggleTheme}>
            {isDark ? (
                <Ionicons name="sunny-ouline" size={64} color="white"/>
            ): (
            <Ionicons name="moon-ouline" size={48} color="white"/>
            )}
        </TouchableOpacity>
    );
};