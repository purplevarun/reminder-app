import { Image, TouchableOpacity } from "react-native";
export const ReminderIcon = ({ onPress }) => {
	return (
		<TouchableOpacity style={{ backgroundColor: "none" }} onPress={onPress}>
			<Image
				source={require("./../../assets/clock-icon.png")}
				style={{ width: 60, height: 60, left: -10, bottom: 5 }}
			/>
		</TouchableOpacity>
	);
};
