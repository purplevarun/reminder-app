import { View, Text } from "react-native";
import { GlobalContext } from "../contexts/GlobalContext";
import { getScreenStyles } from "./screenStyles";
import { useContext } from "react";
import Header from "../components/header/Header";
const CreateReminderScreen = ({ navigation }) => {
	const styles = getScreenStyles(useContext(GlobalContext).colors);
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
