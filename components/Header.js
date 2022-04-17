import { View, Text, TouchableOpacity, Alert } from "react-native";
import { AlarmIcon } from "./icons";
import { AddAlarmBtn } from "./buttons";
const Header = () => {
	const handleAlarmIconPress = () => {
		Alert.alert("");
	};
	return (
		<View
			style={{
				backgroundColor: "green",
				paddingTop: 30,
				flexDirection: "row",
				height: 100,
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				paddingHorizontal: 20,
			}}
		>
			<AlarmIcon onPress={handleAlarmIconPress} />
			<View>
				<AddAlarmBtn />
			</View>
		</View>
	);
};
export default Header;
