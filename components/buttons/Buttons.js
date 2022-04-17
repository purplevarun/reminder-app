import { TouchableOpacity, View } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import { touchableOpacityStyle } from "./ButtonsStyle";
const btnSize = 45;

export const AddReminderBtn = ({ onPress }) => {
	return (
		<TouchableOpacity style={touchableOpacityStyle} onPress={onPress}>
			<MaterialIcon name="alarm-add" size={btnSize} />
		</TouchableOpacity>
	);
};

export const AllRemindersBtn = ({ onPress }) => {
	return (
		<TouchableOpacity style={touchableOpacityStyle} onPress={onPress}>
			<MaterialIcon name="access-alarms" size={btnSize} />
		</TouchableOpacity>
	);
};

export const SettingsBtn = ({ onPress }) => {
	return (
		<TouchableOpacity style={touchableOpacityStyle} onPress={onPress}>
			<View style={{ display: "flex", height: btnSize, top: 1 }}>
				<FeatherIcon name="settings" size={btnSize - 3} />
			</View>
		</TouchableOpacity>
	);
};
