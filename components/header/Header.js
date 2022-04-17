import { View, Alert } from "react-native";
import { ReminderIcon } from "../icons/Icons";
import {
	AddReminderBtn,
	AllRemindersBtn,
	SettingsBtn,
} from "./../buttons/Buttons";
import { headerBtnsStyle, headerStyle } from "./HeaderStyle";
const Header = ({ navigation }) => {
	const handleReminderIconPress = () => {
		Alert.alert("");
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
