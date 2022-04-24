import { View } from "react-native";
import DeleteBtn from "./subcomponents/DeleteBtn";
import SaveBtn from "./subcomponents/SaveBtn";
import TimeSelectorWrapper from "./subcomponents/TimeSelectorWrapper";
const QuickReminderBtns = ({
	deleteBtnProps,
	saveBtnProps,
	timeSelectorProps,
}) => {
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

	return (
		<View style={wrapper}>
			<TimeSelectorWrapper {...timeSelectorProps} />
			<View style={horizontalWrapper}>
				<SaveBtn {...saveBtnProps} />
				<DeleteBtn {...deleteBtnProps} />
			</View>
		</View>
	);
};
export default QuickReminderBtns;
