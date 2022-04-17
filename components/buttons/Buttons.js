import { TouchableOpacity, View } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import { touchableOpacityStyle } from "./ButtonsStyle";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
const btnSize = 45;

export const AddReminderBtn = ({ onPress }) => {
	const { darkMode, colors } = useContext(GlobalContext);
	const getBtnColor = () => {
		return darkMode.darkMode ? colors.light : colors.dark;
	};
	return (
		<TouchableOpacity style={touchableOpacityStyle} onPress={onPress}>
			<MaterialIcon
				name="alarm-add"
				size={btnSize}
				color={getBtnColor()}
			/>
		</TouchableOpacity>
	);
};

export const AllRemindersBtn = ({ onPress }) => {
	const { darkMode, colors } = useContext(GlobalContext);
	const getBtnColor = () => {
		return darkMode.darkMode ? colors.light : colors.dark;
	};
	return (
		<TouchableOpacity style={touchableOpacityStyle} onPress={onPress}>
			<MaterialIcon
				name="access-alarms"
				size={btnSize}
				color={getBtnColor()}
			/>
		</TouchableOpacity>
	);
};

export const SettingsBtn = ({ onPress }) => {
	const { darkMode, colors } = useContext(GlobalContext);
	const getBtnColor = () => {
		return darkMode.darkMode ? colors.light : colors.dark;
	};
	return (
		<TouchableOpacity style={touchableOpacityStyle} onPress={onPress}>
			<View style={{ display: "flex", height: btnSize, top: 1 }}>
				<FeatherIcon
					name="settings"
					size={btnSize - 3}
					color={getBtnColor()}
				/>
			</View>
		</TouchableOpacity>
	);
};
