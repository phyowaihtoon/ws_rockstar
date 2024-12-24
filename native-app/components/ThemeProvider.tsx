import {createContext,useContext,useEffect,useState} from "react";
import {DarkTheme, ThemeProvider as NavigationThemeProvider}  from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appearance } from "react-native";
import { LightTheme } from "@/constants/themes";
import { StatusBar } from "expo-status-bar";

type ThemContextType = {
    isDark : boolean;
    toggleTheme : () => void;
}

const ThemeContext = createContext<ThemContextType | null>(null);
const THEME_STORAGE_KEY = "app-ui-theme";

export const ThemeProvider = ({children} : {children : React.ReactNode}) => {
    const systemColorScheme = Appearance.getColorScheme();
    const [isDark, setIsDark] = useState(systemColorScheme === "dark");

    useEffect(() => {
        const loadTheme = async () => {
            const savedTheme = await AsyncStorage.getTheme(THEME_STORAGE_KEY);
            if(savedTheme !== null){
                setIsDark(savedTheme === "dark");
            }
        };

        loadTheme();
    }, []);

    const toggleTheme = async () => {
        const newTheme = isDark ? "light" : "dark";
        setIsDark(!isDark);

        await AsyncStorage.setTheme(THEME_STORAGE_KEY,newTheme);
    }

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme}}>
            <NavigationThemeProvider value={isDark ? DarkTheme : LightTheme}>
                {children}
                <StatusBar style={isDark ? "light" : "dark"} />
            </NavigationThemeProvider>
        </ThemeContext.Provider>
    );


}

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context) {
        throw new Error ("useTheme must be used within ThemeProvider");
    }

    return context;
}
