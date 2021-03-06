import { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import { GlobalContext } from "../../../contexts/GlobalContext";
const DeleteBtn = ({ setCreateQuickReminder, setHeadingText }) => {
	const { colors } = useContext(GlobalContext);
	const DeleteIcon = <AntIcon name="delete" size={40} color={colors.fg} />;
	const handlePress = () => {
		setCreateQuickReminder(false);
		setHeadingText("Choose a type of Reminder");
	};
	const btnStyle = {
		backgroundColor: colors.red,
		borderRadius: 5,
		display: "flex",
		padding: 10,
		marginTop: 20,
		width: 140,
	};
	const btnContentStyle = {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
	};
	const textStyle = {
		color: colors.fg,
		fontSize: 22,
	};
	return (
		<TouchableOpacity style={btnStyle} onPress={handlePress}>
			<View style={btnContentStyle}>
				<Text style={textStyle}>Delete</Text>
				{DeleteIcon}
			</View>
		</TouchableOpacity>
	);
};
export default DeleteBtn;
