import { Text, View, ScrollView } from "react-native";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import InputBox from "../inputBox/InputBox";
import CreatedAt from "../createdAt/CreatedAt";
import QuickReminderBtns from "./QuickReminderBtns";
const QuickReminder = ({
	navigation,
	setCreateQuickReminder,
	setHeadingText,
}) => {
	const { colors } = useContext(GlobalContext);
	const [currentText, setCurrentText] = useState("");
	const [currentDate, setCurrentDate] = useState(new Date());
	const [currentTime, setCurrentTime] = useState(new Date());
	const [timeOption, setTimeOption] = useState(null);
	const [timeValue, setTimeValue] = useState(null);
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
			setCreateQuickReminder,
			setHeadingText,
		},
		saveBtnProps: {
			currentText,
			currentDate,
			currentTime,
			setCreateQuickReminder,
			navigation,
			timeOption,
		},
		timeSelectorProps: {
			timeOption,
			setTimeOption,
			timeValue,
			setTimeValue,
		},
	};
	return (
		<ScrollView>
			<InputBox {...inputBoxProps} />
			<CreatedAt />
			<QuickReminderBtns {...btnProps} />
		</ScrollView>
	);
};
export default QuickReminder;
