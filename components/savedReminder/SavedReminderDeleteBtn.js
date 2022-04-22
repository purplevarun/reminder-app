import { Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
const SavedReminderDeleteBtn = ({ itemId }) => {
	const { colors, deleteReminder } = useContext(GlobalContext);
	const handlePress = () => {
		deleteReminder(itemId);
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
