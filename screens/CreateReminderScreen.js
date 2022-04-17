import { useEffect, useState, useContext } from "react";
import { View, Text } from "react-native";
import Header from "../components/header/Header";
import { getScreenStyles } from "./screenStyles";
import { GlobalContext } from "../contexts/GlobalContext";
const CreateReminderScreen = ({ navigation }) => {
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
				<Text style={styles.screenHeadingStyle}>
					Create New Reminder
				</Text>
			</View>
		</View>
	);
};

export default CreateReminderScreen;
