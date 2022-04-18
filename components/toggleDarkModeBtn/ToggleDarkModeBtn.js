import { useState, useContext } from "react";
import { Text, View, Switch } from "react-native";
import { GlobalContext } from "../../contexts/GlobalContext";
const ToggleDarkModeBtn = () => {
	const { darkMode, saveDarkMode, colors } = useContext(GlobalContext);
	const [isChecked, setIsChecked] = useState(darkMode ? true : false);
	const handleSwitch = () => {
		setIsChecked((prevValue) => !prevValue);
		saveDarkMode(!isChecked);
	};
	const wrapperStyle = {
		backgroundColor: "none",
		padding: 10,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 35,
	};
	const switchStyle = { transform: [{ scaleX: 1.8 }, { scaleY: 1.8 }] };
	const textStyle = { fontSize: 30, color: colors.fg };

	return (
		<View style={wrapperStyle}>
			<Text style={textStyle}>Dark Mode</Text>
			<Switch
				value={isChecked}
				onValueChange={handleSwitch}
				style={switchStyle}
			/>
		</View>
	);
};
export default ToggleDarkModeBtn;
