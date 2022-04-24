import { View } from "react-native";
import DeleteBtn from "./buttons/DeleteBtn";
import SaveBtn from "./buttons/SaveBtn";
import SelectDateBtn from "./buttons/SelectDateBtn";
import SelectTimeBtn from "./buttons/SelectTimeBtn";
import DateDisplay from "./DateDisplay";
import TimeDisplay from "./TimeDisplay";

const StandardReminderBtns = ({
	deleteBtnProps,
	selectDateBtnProps,
	selectTimeBtnProps,
	dateDisplayProps,
	timeDisplayProps,
	saveBtnProps,
}) => {
	return (
		<View
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				flexWrap: "wrap",
				padding: 10,
			}}
		>
			<SelectDateBtn {...selectDateBtnProps} />
			<DateDisplay {...dateDisplayProps} />
			<SelectTimeBtn {...selectTimeBtnProps} />
			<TimeDisplay {...timeDisplayProps} />
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-between",
					width: "90%",
				}}
			>
				<SaveBtn {...saveBtnProps} />
				<DeleteBtn {...deleteBtnProps} />
			</View>
		</View>
	);
};

export default StandardReminderBtns;
