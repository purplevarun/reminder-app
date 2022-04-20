import { View, Text } from "react-native";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
import DateTimePicker from "@react-native-community/datetimepicker";
const DateSelector = ({ currentDate, setCurrentDate, setShowDateSelector }) => {
	const { colors } = useContext(GlobalContext);
	const handleChange = (event, date) => {
		if (event.type === "set") {
			setCurrentDate(date);
		}
		setShowDateSelector(false);
	};
	return (
		<View>
			<DateTimePicker
				value={currentDate}
				mode="date"
				minimumDate={new Date()}
				onChange={handleChange}
			/>
		</View>
	);
};

export default DateSelector;
