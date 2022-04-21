import { View, Text } from "react-native";
import { getScreenStyles } from "./screenStyles";
import { useContext } from "react";
import Header from "../components/header/Header";
import ToggleDarkModeBtn from "./../components/toggleDarkModeBtn/ToggleDarkModeBtn";
import { GlobalContext } from "../contexts/GlobalContext";
import DeleteAllReminders from "../components/deleteAllReminders/DeleteAllReminders";
const SettingsScreen = ({ navigation }) => {
	const styles = getScreenStyles(useContext(GlobalContext).colors);
	return (
		<View style={styles.screenWrapperStyle}>
			<Header navigation={navigation} />
			<View style={styles.screenBodyStyle}>
				<Text style={styles.screenHeadingStyle}>Settings</Text>
				<ToggleDarkModeBtn />
				<DeleteAllReminders />
			</View>
		</View>
	);
};

export default SettingsScreen;
