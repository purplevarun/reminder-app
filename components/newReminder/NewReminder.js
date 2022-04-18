import { View, Text, TextInput } from "react-native";
import { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import InputBox from "./subcomponents/InputBox";

const NewReminder = () => {
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
	const newReminderWrapperStyles = {
		backgroundColor: colors.bg,
		margin: 10,
	};
	return (
		<View style={newReminderWrapperStyles}>
			<InputBox {...inputBoxProps} />
		</View>
	);
};
export default NewReminder;
