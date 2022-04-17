import { View, Alert } from "react-native";
import { ReminderIcon } from "../icons/Icons";
import {
	AddReminderBtn,
	AllRemindersBtn,
	SettingsBtn,
} from "./../buttons/Buttons";
import { headerBtnsStyle, headerStyle } from "./HeaderStyle";
const Header = () => {
	const handleReminderIconPress = () => {
		Alert.alert("");
	};
	const handleAddReminderBtnPress = () => {
		Alert.alert("");
	};
	const handleAllRemindersBtnPress = () => {
		Alert.alert("");
	};
	const handleSettingsBtnPress = () => {
		Alert.alert("");
	};

	return (
		<View style={headerStyle}>
			<ReminderIcon onPress={handleReminderIconPress} />
			<View style={headerBtnsStyle}>
				<AddReminderBtn onPress={handleAddReminderBtnPress} />
				<AllRemindersBtn onPress={handleAllRemindersBtnPress} />
				<SettingsBtn onPress={handleSettingsBtnPress} />
			</View>
		</View>
	);
};
export default Header;
