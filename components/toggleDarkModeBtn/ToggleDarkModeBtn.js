import { useState, useContext } from "react";
import { Text, View, Switch } from "react-native";
import { GlobalContext } from "../../contexts/GlobalContext";
const ToggleDarkModeBtn = () => {
	const { darkMode } = useContext(GlobalContext);
	const [isChecked, setIsChecked] = useState(
		darkMode.darkMode ? true : false
	);
	const handleSwitch = () => {
		setIsChecked((prevValue) => !prevValue);
		darkMode.setDarkMode(!isChecked);
	};
	const wrapperStyle = {
		backgroundColor: "lightgrey",
		padding: 10,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingRight: 30,
	};
	const switchStyle = { transform: [{ scaleX: 1.8 }, { scaleY: 1.8 }] };
	const textStyle = { fontSize: 20, color: "black" };

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
