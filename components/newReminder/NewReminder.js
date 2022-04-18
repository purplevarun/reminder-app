import { View, Text, TextInput } from "react-native";
import { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import InputBox from "./subcomponents/InputBox";
import DeleteBtn from "./subcomponents/buttons/DeleteBtn";

const NewReminder = ({ setCreateReminder }) => {
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
	const deleteBtnProps = {
		setCreateReminder,
	};
	const newReminderWrapperStyles = {
		backgroundColor: colors.bg,
		margin: 10,
	};
	return (
		<View style={newReminderWrapperStyles}>
			<InputBox {...inputBoxProps} />
			<DeleteBtn {...deleteBtnProps} />
		</View>
	);
};
export default NewReminder;
