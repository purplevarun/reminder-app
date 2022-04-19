import { View, Text } from "react-native";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
import DateTimePicker from "@react-native-community/datetimepicker";
const DateSelector = ({ currentDate, setCurrentDate }) => {
	const { colors } = useContext(GlobalContext);
	return (
		<View>
			<DateTimePicker
				value={currentDate}
				mode="date"
				minimumDate={currentDate}
				onC
			/>
		</View>
	);
};

export default DateSelector;
