import { Alert, TouchableOpacity, Text } from "react-native";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import SaveBtn from "../newReminder/subcomponents/buttons/SaveBtn";
const DeleteAllReminders = () => {
	const { colors, clearReminders } = useContext(GlobalContext);
	const textStyle = { fontSize: 25, color: colors.fg };
	const btnStyle = {
		borderWidth: 2,
		borderColor: colors.red,
		display: "flex",
		flexDirection: "row",
		alignSelf: "center",
		padding: 10,
		marginVertical: 20,
		borderRadius: 10,
		backgroundColor: colors.red,
	};
	const handlePress = () => {
		Alert.alert(
			"Delete All Reminders",
			"This action will delete all reminders",
			[
				{
					text: "Delete",
					style: "default",
					onPress: () => clearReminders(),
				},
				{
					text: "Cancel",
					style: "default",
				},
			]
		);
	};
	return (
		<TouchableOpacity style={btnStyle} onPress={handlePress}>
			<Text style={textStyle}>Delete All Reminders</Text>
		</TouchableOpacity>
	);
};

export default DeleteAllReminders;
