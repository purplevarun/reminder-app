import { View, Text } from "react-native";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
import DateTimePicker from "@react-native-community/datetimepicker";
const TimeSelector = ({ currentTime, setCurrentTime, setShowTimeSelector }) => {
	const { colors } = useContext(GlobalContext);
	const handleChange = (event, time) => {
		if (event.type === "set") {
			setCurrentTime(time);
		}
		setShowTimeSelector(false);
	};
	return (
		<View>
			<DateTimePicker
				value={currentTime}
				mode="time"
				is24Hour={false}
				minimumDate={new Date()}
				onChange={handleChange}
			/>
		</View>
	);
};

export default TimeSelector;
