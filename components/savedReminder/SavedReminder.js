import { View, Text, TouchableOpacity } from "react-native";
import { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import SavedReminderDeleteBtn from "./SavedReminderDeleteBtn";
const SavedReminder = ({ item }) => {
	const { colors } = useContext(GlobalContext);
	const [showDeleteBtn, setShowDeleteBtn] = useState(false);
	const handlePress = () => {
		setShowDeleteBtn(!showDeleteBtn);
	};
	const wrapperStyle = {
		marginHorizontal: 10,
		marginVertical: 20,
		alignSelf: "center",
		padding: 10,
		borderRadius: 10,
		width: "95%",
		borderWidth: 2,
		borderColor: colors.fg,
		backgroundColor: colors.reminderBg,
	};
	return (
		<View style={wrapperStyle}>
			<TouchableOpacity onPress={handlePress}>
				<View
					style={{
						alignItems: "flex-end",
						borderBottomWidth: 2,
						paddingBottom: 5,
						borderBottomColor: colors.fg,
					}}
				>
					<Text style={{ color: colors.fg, fontSize: 12 }}>
						{item.date + " " + item.time}
					</Text>
				</View>
				<View
					style={{
						alignItems: "flex-start",
					}}
				>
					<Text
						style={{
							color: colors.fg,
							fontSize: 20,
							paddingTop: 10,
						}}
					>
						{item.text}
					</Text>
				</View>
			</TouchableOpacity>
			{showDeleteBtn && <SavedReminderDeleteBtn itemId={item.id} />}
		</View>
	);
};

export default SavedReminder;
