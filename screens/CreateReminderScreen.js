import { useContext } from "react";
import { View, Text } from "react-native";
import Header from "../components/header/Header";
import { getScreenStyles } from "./screenStyles";
import { GlobalContext } from "../contexts/GlobalContext";
const CreateReminderScreen = ({ navigation }) => {
	const { colors } = useContext(GlobalContext);
	const styles = getScreenStyles(colors);
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
