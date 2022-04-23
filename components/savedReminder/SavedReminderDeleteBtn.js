import { Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
const SavedReminderDeleteBtn = ({ item }) => {
	const { colors, deleteReminder } = useContext(GlobalContext);
	const handlePress = () => {
		deleteReminder(item.id, item.notificationToken);
	};
	return (
		<TouchableOpacity
			style={{
				backgroundColor: colors.red,
				marginTop: 20,
				alignSelf: "center",
				padding: 10,
				borderRadius: 10,
			}}
			onPress={handlePress}
		>
			<Text style={{ fontSize: 20, color: colors.fg }}>Delete</Text>
		</TouchableOpacity>
	);
};

export default SavedReminderDeleteBtn;
