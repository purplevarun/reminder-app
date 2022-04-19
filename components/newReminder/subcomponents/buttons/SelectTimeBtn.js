import { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { GlobalContext } from "../../../../contexts/GlobalContext";
import Entypo from "react-native-vector-icons/Entypo";
const SelectTimeBtn = ({ showTimeSelector, setShowTimeSelector }) => {
	const { colors } = useContext(GlobalContext);
	const TimeIcon = <Entypo name="back-in-time" size={40} color={colors.fg} />;
	const btnStyle = {
		backgroundColor: colors.blue,
		borderRadius: 5,
		display: "flex",
		padding: 10,
		marginTop: 20,
		width: 220,
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
	const handlePress = () => {
		setShowTimeSelector(!showTimeSelector);
	};
	return (
		<TouchableOpacity style={btnStyle} onPress={handlePress}>
			<View style={btnContentStyle}>
				<Text style={textStyle}>Select Time</Text>
				{TimeIcon}
			</View>
		</TouchableOpacity>
	);
};
export default SelectTimeBtn;
