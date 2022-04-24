import { useEffect, createContext, useState } from "react";
import { darkModeColors, lightModeColors } from "./colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
	cancelNotification,
	sendNotification,
} from "../components/notifications/notifications";
export const GlobalContext = createContext();
const GlobalContextProvider = (props) => {
	const [darkMode, setDarkMode] = useState(true);
	const [colors, setColors] = useState(lightModeColors);
	const [reminders, setReminders] = useState([]);
	const getInitialReminders = async () => {
		const initialReminders = await AsyncStorage.getItem("remindersList");
		if (initialReminders && initialReminders.length > 0) {
			setReminders(eval(initialReminders));
		}
	};
	const setInitialReminders = async (rem) => {
		await AsyncStorage.setItem("remindersList", JSON.stringify(rem));
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
		sendNotification(newReminder.text, newReminder.actualDate)
			.then((token) => {
				console.log(`token = ${token}`);
				const newReminderWithToken = {
					...newReminder,
					notificationToken: token,
				};
				const reminderArray = [newReminderWithToken, ...reminders];
				setReminders(reminderArray);
				setInitialReminders(reminderArray);
			})
			.catch((err) => {
				console.log(`err = \n${err}`);
			});
	};
	const clearReminders = () => {
		setReminders([]);
		setInitialReminders([]);
	};
	const deleteReminder = (itemId, notificationToken) => {
		const newReminders = [];
		reminders.forEach((rem) => {
			if (rem.id !== itemId) {
				newReminders.push(rem);
			}
		});
		setReminders(newReminders);
		setInitialReminders(newReminders);
		cancelNotification(notificationToken)
			.then(() => {
				console.log("cancellation success!");
			})
			.catch((err) => {
				console.error(err);
			});
	};
	const data = {
		darkMode,
		saveDarkMode,
		colors,
		saveReminder,
		reminders,
		clearReminders,
		deleteReminder,
	};
	return (
		<GlobalContext.Provider value={data}>
			{props.children}
		</GlobalContext.Provider>
	);
};
export default GlobalContextProvider;
