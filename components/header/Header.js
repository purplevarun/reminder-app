import { View, Alert } from "react-native";
import { GlobalContext } from "../../contexts/GlobalContext";
import { ReminderIcon } from "../icons/Icons";
import {
	AddReminderBtn,
	AllRemindersBtn,
	SettingsBtn,
} from "./../buttons/Buttons";
import { getHeaderStyles, headerBtnsStyle, headerStyle } from "./HeaderStyle";
import { useState, useContext, useEffect } from "react";
const Header = ({ navigation }) => {
	const handleReminderIconPress = () => {
		Alert.alert(
			"Created by Varun Kedia",
			"Reminder App is an app used to set regular reminders"
		);
	};
	const handleAddReminderBtnPress = () => {
		navigation.navigate("Screen_1_Add_Reminder");
	};
	const handleAllRemindersBtnPress = () => {
		navigation.navigate("Screen_2_All_Reminders");
	};
	const handleSettingsBtnPress = () => {
		navigation.navigate("Screen_3_Settings");
	};
	const { darkMode, colors } = useContext(GlobalContext);
	const [styles, setStyles] = useState(
		getHeaderStyles(darkMode.darkMode, colors)
	);
	useEffect(() => {
		setStyles(getHeaderStyles(darkMode.darkMode, colors));
	}, [darkMode.darkMode]);
	return (
		<View style={styles.headerStyle}>
			<ReminderIcon onPress={handleReminderIconPress} />
			<View style={styles.headerBtnsStyle}>
				<AddReminderBtn onPress={handleAddReminderBtnPress} />
				<AllRemindersBtn onPress={handleAllRemindersBtnPress} />
				<SettingsBtn onPress={handleSettingsBtnPress} />
			</View>
		</View>
	);
};
export default Header;
