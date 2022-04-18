import { View } from "react-native";
import DeleteBtn from "./buttons/DeleteBtn";
import SaveBtn from "./buttons/SaveBtn";

const NewReminderBtns = ({ deleteBtnProps }) => {
	return (
		<View
			style={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-evenly",
				margin: 10,
			}}
		>
			<SaveBtn />
			<DeleteBtn {...deleteBtnProps} />
		</View>
	);
};

export default NewReminderBtns;
