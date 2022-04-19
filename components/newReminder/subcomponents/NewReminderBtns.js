import { View } from "react-native";
import DeleteBtn from "./buttons/DeleteBtn";
import SaveBtn from "./buttons/SaveBtn";
import SelectDateBtn from "./buttons/SelectDateBtn";

const NewReminderBtns = ({ deleteBtnProps }) => {
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
			<SelectDateBtn />
			<SaveBtn />
			<DeleteBtn {...deleteBtnProps} />
		</View>
	);
};

export default NewReminderBtns;
