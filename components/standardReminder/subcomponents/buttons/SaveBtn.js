import { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { GlobalContext } from "../../../../contexts/GlobalContext";
import AntIcon from "react-native-vector-icons/AntDesign";
import shortid from "shortid";
const SaveBtn = ({
	currentTime,
	currentDate,
	currentText,
	setCreateStandardReminder,
	navigation,
	setHeadingText,
}) => {
	const { colors, saveReminder } = useContext(GlobalContext);
	const SaveIcon = <AntIcon name="save" size={40} color={colors.fg} />;
	const getDateFormat = () => {
		return currentDate.toString().slice(0, 15);
	};
	const getTimeFormat = () => {
		return currentTime.toString().slice(16, 24);
	};
	const getNeatTime = () => {
		return new Date().toString().slice(0, 24);
	};
	const getDateObj = () => {
		const dateString =
			getDateFormat(currentDate) + " " + getTimeFormat(currentTime);
		const dateObj = new Date(dateString);
		return dateObj;
	};
	const handlePress = () => {
		const newReminder = {
			text: currentText,
			date: getDateFormat(currentDate),
			time: getTimeFormat(currentTime),
			created: getNeatTime(new Date()),
			actualDate: getDateObj(),
			id: shortid.generate(),
		};
		saveReminder(newReminder);
		navigation.navigate("Screen_2_All_Reminders");
		setCreateStandardReminder(false);
		setHeadingText("Select type of Reminder");
	};
	const btnStyle = {
		backgroundColor: currentText === "" ? colors.darkgreen : colors.green,
		borderRadius: 5,
		display: "flex",
		padding: 10,
		marginTop: 20,
		width: 140,
	};
	const btnContentStyle = {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
	};
	const textStyle = {
		color: colors.fg,
		fontSize: 22,
	};
	return (
		<TouchableOpacity
			style={btnStyle}
			onPress={handlePress}
			disabled={currentText === ""}
		>
			<View style={btnContentStyle}>
				<Text style={textStyle}>Save</Text>
				{SaveIcon}
			</View>
		</TouchableOpacity>
	);
};
export default SaveBtn;
