import { ScrollView } from "react-native";
import { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import InputBox from "./subcomponents/InputBox";
import NewReminderBtns from "./subcomponents/NewReminderBtns";

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
	const btnProps = {
		deleteBtnProps: {
			setCreateReminder,
		},
	};
	const newReminderWrapperStyles = {
		backgroundColor: colors.bg,
		margin: 10,
	};
	return (
		<ScrollView style={newReminderWrapperStyles}>
			<InputBox {...inputBoxProps} />
			<NewReminderBtns {...btnProps} />
		</ScrollView>
	);
};
export default NewReminder;
