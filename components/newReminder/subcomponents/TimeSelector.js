import { View, Text } from "react-native";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
import DateTimePicker from "@react-native-community/datetimepicker";
const TimeSelector = ({ currentTime, setCurrentTime }) => {
	const { colors } = useContext(GlobalContext);
	return (
		<View>
			<DateTimePicker
				value={currentTime}
				mode="time"
				minimumDate={currentTime}
			/>
		</View>
	);
};

export default TimeSelector;
