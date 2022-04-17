import { useContext } from "react";
import { View, Text } from "react-native";
import { GlobalContext } from "../contexts/GlobalContext";
const CreateReminderScreen = () => {
	const data = useContext(GlobalContext);
	return (
		<View
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
		>
			<Text>Create Reminder Screen</Text>
			<Text>{data.name}</Text>
		</View>
	);
};

export default CreateReminderScreen;
