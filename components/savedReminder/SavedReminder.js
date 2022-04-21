import { View, Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
const SavedReminder = ({ item }) => {
	const { colors } = useContext(GlobalContext);
	const textStyle = {
		color: colors.fg,
		fontSize: 20,
	};
	return (
		<TouchableOpacity
			style={{
				marginHorizontal: 10,
				marginVertical: 20,
				alignSelf: "center",
				padding: 10,
				borderRadius: 10,
				width: "95%",
				borderWidth: 2,
				borderColor: colors.fg,
			}}
		>
			<Text style={textStyle}>TEXT = {item.text}</Text>
			<Text style={textStyle}>DATE = {item.date}</Text>
			<Text style={textStyle}>TIME = {item.time}</Text>
		</TouchableOpacity>
	);
};

export default SavedReminder;
