import { Text, View, ScrollView } from "react-native";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import InputBox from "../inputBox/InputBox";
import CreatedAt from "../createdAt/CreatedAt";

const QuickReminder = ({ navigation, setCreateQuickReminder }) => {
	const { colors } = useContext(GlobalContext);
	const [currentText, setCurrentText] = useState("");
	const handleTextChange = (newText) => {
		setCurrentText(newText);
	};
	const inputBoxProps = {
		currentText,
		handleTextChange,
		colors,
	};
	return (
		<ScrollView>
			<InputBox {...inputBoxProps} />
			<CreatedAt />
		</ScrollView>
	);
};
export default QuickReminder;
