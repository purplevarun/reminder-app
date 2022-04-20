import { View, Text } from "react-native";
import { useContext } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
const DateDisplay = ({ currentDate }) => {
	const { colors } = useContext(GlobalContext);
	const textStyle = {
		color: colors.fg,
	};
	const getDateFormat = () => {
		return currentDate.toString().slice(0, 15);
	};
	return (
		<View
			style={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "center",
				padding: 5,
				height: 40,
			}}
		>
			<Text style={textStyle}>{getDateFormat()}</Text>
		</View>
	);
};

export default DateDisplay;
