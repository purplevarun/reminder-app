import { View, Text } from "react-native";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
const CreateReminderScreen = () => {
	const { style } = useContext(GlobalContext);
	return (
		<View style={style.screenStyle}>
			<Text>Create Reminder Screen</Text>
		</View>
	);
};

export default CreateReminderScreen;
