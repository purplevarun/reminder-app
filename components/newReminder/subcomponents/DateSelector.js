import { View, Text } from "react-native";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
import DateTimePicker from "@react-native-community/datetimepicker";
const DateSelector = ({ time }) => {
	const { colors } = useContext(GlobalContext);
	return (
		<View>
			<DateTimePicker value={time} mode="date" minimumDate={time} />
		</View>
	);
};

export default DateSelector;
