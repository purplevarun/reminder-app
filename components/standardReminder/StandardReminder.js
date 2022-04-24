import { ScrollView } from "react-native";
import { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import StandardReminderBtns from "./subcomponents/StandardReminderBtns";
import InputBox from "./subcomponents/InputBox";
import CreatedAt from "./subcomponents/CreatedAt";
import TimeSelector from "./subcomponents/TimeSelector";
import DateSelector from "./subcomponents/DateSelector";
const NewReminder = ({ setCreateStandardReminder, navigation }) => {
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
			setCreateStandardReminder,
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
			setCreateStandardReminder,
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
			<StandardReminderBtns {...btnProps} />
		</ScrollView>
	);
};
export default NewReminder;
