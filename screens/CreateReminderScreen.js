import { View, Text } from "react-native";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import Header from "../components/header/Header";
const CreateReminderScreen = () => {
	const { style } = useContext(GlobalContext);
	return (
		<View style={style.screenWrapper}>
			<Header />
			<Text>Create Reminder Screen</Text>
		</View>
	);
};

export default CreateReminderScreen;
