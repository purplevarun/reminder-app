import { Text, TouchableOpacity, View } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FeatherIcon from "react-native-vector-icons/Feather";

const touchableOpacityStyle = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	backgroundColor: "none",
	marginHorizontal: 10,
};

const textStyle = {
	fontWeight: "bold",
};

const btnSize = 45;

export const AddReminderBtn = ({ onPress }) => {
	return (
		<TouchableOpacity style={touchableOpacityStyle} onPress={onPress}>
			<MaterialIcon name="alarm-add" size={btnSize} />
			{/* <Text style={textStyle}>Add</Text> */}
		</TouchableOpacity>
	);
};

export const AllRemindersBtn = ({ onPress }) => {
	return (
		<TouchableOpacity style={touchableOpacityStyle} onPress={onPress}>
			<MaterialIcon name="access-alarms" size={btnSize} />
			{/* <Text style={textStyle}>Upcoming</Text> */}
		</TouchableOpacity>
	);
};

export const SettingsBtn = ({ onPress }) => {
	return (
		<TouchableOpacity style={touchableOpacityStyle} onPress={onPress}>
			<View style={{ display: "flex", height: btnSize, top: 1 }}>
				<FeatherIcon name="settings" size={btnSize - 3} />
			</View>
			{/* <Text style={textStyle}>Settings</Text> */}
		</TouchableOpacity>
	);
};
