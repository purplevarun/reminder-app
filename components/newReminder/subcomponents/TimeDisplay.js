import { View, Text } from "react-native";
import { useContext } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
const TimeDisplay = ({ currentTime }) => {
	const { colors } = useContext(GlobalContext);
	const textStyle = {
		color: colors.fg,
	};
	const getTimeFormat = () => {
		return currentTime.toString().slice(16, 24);
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
			<Text style={textStyle}>{getTimeFormat()}</Text>
		</View>
	);
};

export default TimeDisplay;
