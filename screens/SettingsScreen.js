import { View, Text } from "react-native";
import Header from "../components/header/Header";
import screenStyles from "./screenStyles";
import ToggleDarkModeBtn from "./../components/toggleDarkModeBtn/ToggleDarkModeBtn";
const SettingsScreen = ({ navigation }) => {
	return (
		<View style={screenStyles().screenWrapperStyle}>
			<Header navigation={navigation} />
			<View style={screenStyles().screenBodyStyle}>
				<Text style={screenStyles().screenHeadingStyle}>Settings</Text>
				<ToggleDarkModeBtn />
			</View>
		</View>
	);
};

export default SettingsScreen;
