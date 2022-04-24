import { useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import shortid from "shortid";
import { GlobalContext } from "../../../contexts/GlobalContext";
import { timeConversion } from "./timeData";
const SaveBtn = ({
	currentText,
	timeOption,
	timeValue,
	setCreateQuickReminder,
	navigation,
	setHeadingText,
}) => {
	const { colors, saveReminder } = useContext(GlobalContext);
	const SaveIcon = <AntIcon name="save" size={40} color={colors.fg} />;
	const extractDate = () => {
		const extraDate = timeValue * timeConversion[timeOption];
		const newDate = new Date();
		const totalDate = new Date(newDate.getTime() + extraDate);
		return totalDate;
	};
	const getDateFormat = () => {
		const currentDate = extractDate().toString();
		return currentDate.toString().slice(0, 15);
	};
	const getTimeFormat = () => {
		const currentTime = extractDate().toString();
		return currentTime.toString().slice(16, 24);
	};
	const getNeatTime = () => {
		return new Date().toString().slice(0, 24);
	};
	const getDateObj = () => {
		const dateString = getDateFormat() + " " + getTimeFormat();
		const dateObj = new Date(dateString);
		return dateObj;
	};
	const getDisableStatus = () => {
		if (timeValue) return false;
		return true;
	};
	const handlePress = () => {
		const newReminder = {
			text: currentText,
			date: getDateFormat(),
			time: getTimeFormat(),
			created: getNeatTime(new Date()),
			actualDate: getDateObj(),
			id: shortid.generate(),
		};
		saveReminder(newReminder);
		navigation.navigate("Screen_2_All_Reminders");
		setCreateQuickReminder(false);
		setHeadingText("Select type of Reminder");
	};
	const btnStyle = {
		backgroundColor: getDisableStatus() ? colors.darkgreen : colors.green,
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
			disabled={getDisableStatus()}
		>
			<View style={btnContentStyle}>
				<Text style={textStyle}>Save</Text>
				{SaveIcon}
			</View>
		</TouchableOpacity>
	);
};
export default SaveBtn;
