import { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { GlobalContext } from "../../../../contexts/GlobalContext";
import Fontiso from "react-native-vector-icons/Fontisto";
const SelectDateBtn = ({ showDateSelector, setShowDateSelector }) => {
	const { colors } = useContext(GlobalContext);
	const DateIcon = <Fontiso name="date" size={40} color={colors.fg} />;
	const btnStyle = {
		backgroundColor: colors.purple,
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
		setShowDateSelector(!showDateSelector);
	};
	return (
		<TouchableOpacity style={btnStyle} onPress={handlePress}>
			<View style={btnContentStyle}>
				<Text style={textStyle}>Select Date</Text>
				{DateIcon}
			</View>
		</TouchableOpacity>
	);
};
export default SelectDateBtn;
