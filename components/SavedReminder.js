import { View, Text } from "react-native";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
const SavedReminder = ({ time, date, text, id, created }) => {
	const { colors } = useContext(GlobalContext);
	return (
		<View>
			<Text style={{ color: colors.fg }}>TEXT = {text}</Text>
			<Text style={{ color: colors.fg }}>DATE = {date}</Text>
			<Text style={{ color: colors.fg }}>ID = {id}</Text>
		</View>
	);
};

export default SavedReminder;
