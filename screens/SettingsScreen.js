import { View, Text } from "react-native";
import { useState, useEffect, useContext } from "react";
import Header from "../components/header/Header";
import { getScreenStyles } from "./screenStyles";
import ToggleDarkModeBtn from "../components/toggleDarkModeBtn/ToggleDarkModeBtn";
import { GlobalContext } from "../contexts/GlobalContext";
const SettingsScreen = ({ navigation }) => {
	const { darkMode, colors } = useContext(GlobalContext);
	const [styles, setStyles] = useState(
		getScreenStyles(darkMode.darkMode, colors)
	);
	useEffect(() => {
		setStyles(getScreenStyles(darkMode.darkMode, colors));
	}, [darkMode.darkMode]);
	return (
		<View style={styles.screenWrapperStyle}>
			<Header navigation={navigation} />
			<View style={styles.screenBodyStyle}>
				<Text style={styles.screenHeadingStyle}>Settings</Text>
				<ToggleDarkModeBtn />
			</View>
		</View>
	);
};

export default SettingsScreen;
