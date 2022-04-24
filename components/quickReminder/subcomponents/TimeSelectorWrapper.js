import { View, Text } from "react-native";
import TimeSelector from "./TimeSelector";
import { useContext } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
const TimeSelectorWrapper = ({
	timeOption,
	timeValue,
	setTimeOption,
	setTimeValue,
}) => {
	const { colors } = useContext(GlobalContext);
	const horizontalWrapper = {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-evenly",
		alignItems: "center",
		marginVertical: 20,
	};
	const textStyle = {
		color: colors.fg,
		fontSize: 25,
	};
	const newTimeSelectorProps = {
		timeOption,
		setTimeOption,
		timeValue,
		setTimeValue,
	};
	return (
		<View style={horizontalWrapper}>
			{(!timeOption || !timeValue) && (
				<TimeSelector {...newTimeSelectorProps} />
			)}
			{timeOption && !timeValue && (
				<Text style={textStyle}>{timeOption}</Text>
			)}
			{timeOption && timeValue && (
				<Text style={textStyle}>{timeValue + " " + timeOption}</Text>
			)}
		</View>
	);
};
export default TimeSelectorWrapper;
