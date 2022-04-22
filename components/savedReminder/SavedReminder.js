import { View, Text, TouchableOpacity } from "react-native";
import { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import SavedReminderDeleteBtn from "./SavedReminderDeleteBtn";
const SavedReminder = ({ item }) => {
	const { colors } = useContext(GlobalContext);
	const textStyle = {
		color: colors.fg,
		fontSize: 20,
	};
	const [showDeleteBtn, setShowDeleteBtn] = useState(false);
	const handlePress = () => {
		setShowDeleteBtn(!showDeleteBtn);
	};
	return (
		<View
			style={{
				marginHorizontal: 10,
				marginVertical: 20,
				alignSelf: "center",
				padding: 10,
				borderRadius: 10,
				width: "95%",
				borderWidth: 2,
				borderColor: colors.fg,
				backgroundColor: colors.dark,
			}}
		>
			<TouchableOpacity onPress={handlePress}>
				<Text style={textStyle}>TEXT = {item.text}</Text>
				<Text style={textStyle}>
					DATE = {item.actualDate.toString()}
				</Text>
				<Text style={textStyle}>TIME = {item.time}</Text>
			</TouchableOpacity>
			{showDeleteBtn && <SavedReminderDeleteBtn itemId={item.id} />}
		</View>
	);
};

export default SavedReminder;
