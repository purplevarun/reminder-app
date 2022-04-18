import { View, Text } from "react-native";
import Header from "../components/header/Header";
import screenStyles from "./screenStyles";
import { getScreenStyles } from "./screenStyles";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
const MyRemindersScreen = ({ navigation }) => {
	const styles = getScreenStyles(useContext(GlobalContext).colors);
	return (
		<View style={styles.screenWrapperStyle}>
			<Header navigation={navigation} />
			<View style={styles.screenBodyStyle}>
				<Text style={styles.screenHeadingStyle}>My Reminders</Text>
			</View>
		</View>
	);
};

export default MyRemindersScreen;
