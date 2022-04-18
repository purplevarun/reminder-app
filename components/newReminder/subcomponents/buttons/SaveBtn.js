import { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { GlobalContext } from "../../../../contexts/GlobalContext";
import AntIcon from "react-native-vector-icons/AntDesign";
const SaveBtn = () => {
	const { colors, saveReminder } = useContext(GlobalContext);
	const SaveIcon = <AntIcon name="save" size={40} color={colors.fg} />;
	const handlePress = () => {
		const newReminder = {};
		saveReminder(newReminder);
	};
	const btnStyle = {
		backgroundColor: colors.green,
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
				<Text style={textStyle}>Save</Text>
				{SaveIcon}
			</View>
		</TouchableOpacity>
	);
};
export default SaveBtn;
