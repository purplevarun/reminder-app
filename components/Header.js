import { View, Text, TouchableOpacity } from "react-native";
import { AlarmIcon } from "./icons/Icons";
const Header = () => {
	return (
		<View
			style={{
				backgroundColor: "green",
				paddingTop: 30,
				flexDirection: "row",
				height: 80,
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				paddingHorizontal: 20,
			}}
		>
			<AlarmIcon />
			<Text>Header</Text>
		</View>
	);
};
export default Header;
