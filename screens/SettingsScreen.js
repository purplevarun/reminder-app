import { View, Text } from "react-native";
import { useState } from "react";
import Header from "../components/header/Header";
import {
	screenHeadingStyle,
	screenBodyStyle,
	screenWrapperStyle,
} from "./screenStyles";
import ToggleDarkModeBtn from "../components/toggleDarkModeBtn/ToggleDarkModeBtn";
const SettingsScreen = ({ navigation }) => {
	const navProp = {
		navigation: navigation,
	};
	const [styles, setStyles] = useState();
	return (
		<View style={screenWrapperStyle}>
			<Header {...navProp} />
			<View style={screenBodyStyle}>
				<Text style={screenHeadingStyle}>Settings</Text>
				<ToggleDarkModeBtn />
			</View>
		</View>
	);
};

export default SettingsScreen;
