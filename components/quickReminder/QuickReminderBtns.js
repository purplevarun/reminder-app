import { View, Text } from "react-native";
import DeleteBtn from "./subcomponents/DeleteBtn";
import SaveBtn from "./subcomponents/SaveBtn";
import TimeSelector from "./subcomponents/TimeSelector";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
const QuickReminderBtns = ({
	deleteBtnProps,
	saveBtnProps,
	timeSelectorProps,
}) => {
	const { colors } = useContext(GlobalContext);
	const horizontalWrapper = {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-evenly",
		alignItems: "center",
	};
	const wrapper = {
		justifyContent: "center",
		alignItems: "center",
	};
	const textStyle = {
		color: colors.fg,
		fontSize: 25,
	};
	return (
		<View style={wrapper}>
			<View style={horizontalWrapper}>
				<TimeSelector {...timeSelectorProps} />
				{timeSelectorProps.timeOption && (
					<Text style={textStyle}>
						{timeSelectorProps.timeOption}
					</Text>
				)}
			</View>
			<View style={horizontalWrapper}>
				<SaveBtn {...saveBtnProps} />
				<DeleteBtn {...deleteBtnProps} />
			</View>
		</View>
	);
};
export default QuickReminderBtns;
