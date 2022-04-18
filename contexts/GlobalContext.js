import { useEffect, createContext, useState } from "react";
import { darkModeColors, lightModeColors } from "./colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const GlobalContext = createContext();
const GlobalContextProvider = (props) => {
	const [darkMode, setDarkMode] = useState(true);
	const [colors, setColors] = useState(lightModeColors);
	const [reminders, setReminders] = useState([]);
	const getInitialReminders = async () => {
		const initalReminders = await AsyncStorage.getItem("remindersList");
		if (initalReminders && initalReminders.length > 0) {
			setReminders(initalReminders);
		}
	};
	const setInitialReminders = async () => {
		await AsyncStorage.setItem("remindersList", reminders);
	};
	const getDefaultTheme = async () => {
		const defaultTheme = await AsyncStorage.getItem("defaultThemeForApp");
		if (defaultTheme) {
			setDarkMode(defaultTheme === "dark" ? true : false);
			setColors(
				defaultTheme === "dark" ? darkModeColors : lightModeColors
			);
		}
	};
	const setDefaultTheme = async (darkMode) => {
		await AsyncStorage.setItem(
			"defaultThemeForApp",
			darkMode ? "dark" : "light"
		);
	};
	useEffect(() => {
		getDefaultTheme();
		getInitialReminders();
	}, []);
	useEffect(() => {
		setColors(darkMode ? darkModeColors : lightModeColors);
	}, [darkMode]);
	const saveDarkMode = (value) => {
		setDarkMode(value);
		setDefaultTheme(value);
	};
	const saveReminder = (newReminder) => {
		setReminders([newReminder, ...reminders]);
		setInitialReminders();
	};
	const data = {
		darkMode,
		saveDarkMode,
		colors,
		saveReminder,
	};
	return (
		<GlobalContext.Provider value={data}>
			{props.children}
		</GlobalContext.Provider>
	);
};
export default GlobalContextProvider;
