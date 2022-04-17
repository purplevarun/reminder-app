import { View, Alert } from "react-native";
import { ReminderIcon } from "./icons";
import { AddReminderBtn, AllRemindersBtn, SettingsBtn } from "./buttons";
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
	const headerStyle = {
		backgroundColor: "green",
		paddingTop: 30,
		flexDirection: "row",
		height: 100,
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 20,
	};
	const headerBtnsStyle = {
		display: "flex",
		flexDirection: "row",
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
