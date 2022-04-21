import { ScrollView } from "react-native";
import { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import InputBox from "./subcomponents/InputBox";
import NewReminderBtns from "./subcomponents/NewReminderBtns";
import CreatedAt from "./subcomponents/CreatedAt";
import TimeSelector from "./subcomponents/TimeSelector";
import DateSelector from "./subcomponents/DateSelector";
const NewReminder = ({ setCreateReminder, navigation }) => {
	const { colors } = useContext(GlobalContext);
	const [currentText, setCurrentText] = useState("");
	const [showDateSelector, setShowDateSelector] = useState(false);
	const [showTimeSelector, setShowTimeSelector] = useState(false);
	const [currentDate, setCurrentDate] = useState(new Date());
	const [currentTime, setCurrentTime] = useState(new Date());

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
		selectDateBtnProps: {
			showDateSelector,
			setShowDateSelector,
		},
		selectTimeBtnProps: {
			showTimeSelector,
			setShowTimeSelector,
		},
		dateDisplayProps: {
			currentDate,
		},
		timeDisplayProps: {
			currentTime,
		},
		saveBtnProps: {
			currentTime,
			currentDate,
			currentText,
			setCreateReminder,
			navigation,
		},
	};
	const newReminderWrapperStyles = {
		backgroundColor: colors.bg,
		margin: 10,
	};
	const dateSelectorProps = {
		currentDate,
		setCurrentDate,
		setShowDateSelector,
	};
	const timeSelectorProps = {
		currentTime,
		setCurrentTime,
		setShowTimeSelector,
	};
	return (
		<ScrollView style={newReminderWrapperStyles}>
			<InputBox {...inputBoxProps} />
			<CreatedAt />
			{showDateSelector && <DateSelector {...dateSelectorProps} />}
			{showTimeSelector && <TimeSelector {...timeSelectorProps} />}
			<NewReminderBtns {...btnProps} />
		</ScrollView>
	);
};
export default NewReminder;
