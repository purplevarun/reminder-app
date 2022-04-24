import { Text, TouchableOpacity, View } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCom from "react-native-vector-icons/MaterialCommunityIcons";
import { touchableOpacityStyle } from "./ButtonsStyle";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";
const btnSize = 45;

export const AddReminderBtn = ({ onPress }) => {
	const { colors } = useContext(GlobalContext);
	return (
		<TouchableOpacity style={touchableOpacityStyle} onPress={onPress}>
			<MaterialIcon name="alarm-add" size={btnSize} color={colors.fg} />
		</TouchableOpacity>
	);
};

export const AllRemindersBtn = ({ onPress }) => {
	const { colors } = useContext(GlobalContext);
	return (
		<TouchableOpacity style={touchableOpacityStyle} onPress={onPress}>
			<MaterialIcon
				name="access-alarms"
				size={btnSize}
				color={colors.fg}
			/>
		</TouchableOpacity>
	);
};

export const SettingsBtn = ({ onPress }) => {
	const { colors } = useContext(GlobalContext);
	return (
		<TouchableOpacity style={touchableOpacityStyle} onPress={onPress}>
			<View style={{ display: "flex", height: btnSize, top: 1 }}>
				<FeatherIcon
					name="settings"
					size={btnSize - 3}
					color={colors.fg}
				/>
			</View>
		</TouchableOpacity>
	);
};

export const CreateReminderBtn = ({ onPress }) => {
	const { colors } = useContext(GlobalContext);
	return (
		<View
			style={{
				display: "flex",
				paddingTop: 50,
			}}
		>
			<TouchableOpacity
				style={{ ...touchableOpacityStyle }}
				onPress={onPress}
			>
				<Text
					style={{
						color: colors.fg,
						fontSize: 20,
						marginVertical: 20,
					}}
				>
					Standard Reminder
				</Text>
				<View style={{ display: "flex", height: btnSize, top: 1 }}>
					<FeatherIcon
						name="plus-circle"
						size={btnSize - 3}
						color={colors.fg}
					/>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export const QuickReminderBtn = ({ onPress }) => {
	const { colors } = useContext(GlobalContext);
	return (
		<View
			style={{
				display: "flex",
				paddingTop: 50,
			}}
		>
			<TouchableOpacity
				style={{
					...touchableOpacityStyle,
					alignSelf: "center",
				}}
				onPress={onPress}
			>
				<Text
					style={{
						color: colors.fg,
						fontSize: 20,
						marginVertical: 20,
					}}
				>
					Quick Reminder
				</Text>
				<View style={{ display: "flex", height: btnSize, top: 1 }}>
					<MaterialCom
						name="lightning-bolt"
						size={btnSize}
						color={colors.fg}
					/>
				</View>
			</TouchableOpacity>
		</View>
	);
};
