import { View, Text } from "react-native";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
import DateTimePicker from "@react-native-community/datetimepicker";
const TimeSelector = ({ time }) => {
	const { colors } = useContext(GlobalContext);
	return (
		<View>
			<DateTimePicker value={time} mode="time" minimumDate={time} />
		</View>
	);
};

export default TimeSelector;
