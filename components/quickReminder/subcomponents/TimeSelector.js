import { View } from "react-native";
import { useContext } from "react";
import SelectDropdown from "react-native-select-dropdown";
import { GlobalContext } from "../../../contexts/GlobalContext";
import IonIcon from "react-native-vector-icons/Ionicons";
import { timeOptions, timeValues } from "./../subcomponents/timeData";
const TimeSelector = ({ setTimeOption, timeOption, setTimeValue }) => {
	const { colors } = useContext(GlobalContext);
	const handleIcon = () => {
		return <IonIcon name="timer-outline" size={40} color={colors.fg} />;
	};
	const btnStyle = {
		backgroundColor: timeOption ? colors.blue : colors.purple,
		borderRadius: 10,
		padding: 10,
		height: 60,
		width: 180,
		flexDirection: "row-reverse",
		justifyContent: "center",
		alignItems: "center",
	};
	const btnTextStyle = {
		fontSize: 25,
		color: colors.fg,
	};
	const wrapper = { margin: 10, marginTop: 20 };
	const handleSelect = (value) => {
		if (timeOption) {
			setTimeValue(value);
		} else {
			setTimeOption(value);
		}
	};
	const handleBtnTextAfterSelection = () => {
		return `Set ${timeOption ? "Value" : "Time"}`;
	};
	return (
		<View style={wrapper}>
			<SelectDropdown
				defaultButtonText="Set Time"
				data={timeOption ? timeValues[timeOption] : timeOptions}
				buttonStyle={btnStyle}
				buttonTextStyle={btnTextStyle}
				renderDropdownIcon={handleIcon}
				onSelect={handleSelect}
				buttonTextAfterSelection={handleBtnTextAfterSelection}
			/>
		</View>
	);
};
export default TimeSelector;
