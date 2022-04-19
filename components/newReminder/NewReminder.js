import { ScrollView } from "react-native";
import { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import InputBox from "./subcomponents/InputBox";
import NewReminderBtns from "./subcomponents/NewReminderBtns";
import CreatedAt from "./subcomponents/CreatedAt";
import TimeSelector from "./subcomponents/TimeSelector";
import DateSelector from "./subcomponents/DateSelector";

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
	const [showDateSelector, setShowDateSelector] = useState(false);
	const [showTimeSelector, setShowTimeSelector] = useState(false);
	const [currentTime, setCurrentTime] = useState(new Date());
	return (
		<ScrollView style={newReminderWrapperStyles}>
			<InputBox {...inputBoxProps} />
			<CreatedAt time={currentTime} />
			{showDateSelector && <DateSelector time={currentTime} />}
			{showTimeSelector && <TimeSelector time={currentTime} />}
			<NewReminderBtns {...btnProps} />
		</ScrollView>
	);
};
export default NewReminder;
