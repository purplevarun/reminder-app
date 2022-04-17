import { View, Text } from "react-native";
import Header from "../components/header/Header";
import { screenWrapperStyle } from "./screenStyles";
const CreateReminderScreen = () => {
	return (
		<View style={screenWrapperStyle}>
			<Header />
			<Text>Create Reminder Screen</Text>
		</View>
	);
};

export default CreateReminderScreen;
