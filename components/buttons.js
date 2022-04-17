import { Text, TouchableOpacity } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
export const AddAlarmBtn = ({ onPress }) => {
	return (
		<TouchableOpacity
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				backgroundColor: "none",
			}}
		>
			<MaterialIcon name="alarm-add" size={40} />
			<Text
				style={{
					fontWeight: "bold",
				}}
			>
				Add Alarm
			</Text>
		</TouchableOpacity>
	);
};
