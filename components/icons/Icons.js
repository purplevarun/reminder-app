import { Image } from "react-native";
export const AlarmIcon = () => {
	return (
		<Image
			source={require("./../../assets/clock-icon.png")}
			style={{ width: 60, height: 60, left: -10, bottom: 5 }}
		/>
	);
};
