import { View } from "react-native";
import DeleteBtn from "./buttons/DeleteBtn";
import SaveBtn from "./buttons/SaveBtn";
import SelectDateBtn from "./buttons/SelectDateBtn";
import SelectTimeBtn from "./buttons/SelectTimeBtn";

const NewReminderBtns = ({
	deleteBtnProps,
	selectDateBtnProps,
	selectTimeBtnProps,
}) => {
	return (
		<View
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-evenly",
				margin: 10,
				flexWrap: "wrap",
			}}
		>
			<SelectDateBtn {...selectDateBtnProps} />
			<SelectTimeBtn {...selectTimeBtnProps} />
			<SaveBtn />
			<DeleteBtn {...deleteBtnProps} />
		</View>
	);
};

export default NewReminderBtns;
