import { ScrollView, View, Text } from "react-native";
import { GlobalContext } from "../contexts/GlobalContext";
import { getScreenStyles } from "./screenStyles";
import { useContext, useState } from "react";
import Header from "../components/header/Header";

import StandardReminder from "./../components/standardReminder/StandardReminder";
import NewReminderBtns from "../components/newReminderBtns/NewReminderBtns";
import QuickReminder from "../components/quickReminder/QuickReminder";
const CreateReminderScreen = ({ navigation }) => {
	const { colors } = useContext(GlobalContext);
	const styles = getScreenStyles(colors);
	const [createStandardReminder, setCreateStandardReminder] = useState(false);
	const [createQuickReminder, setCreateQuickReminder] = useState(false);
	const [headingText, setHeadingText] = useState("Create New Reminder");
	const handleStandardPress = () => {
		setCreateStandardReminder(true);
		setHeadingText("Standard Reminder");
	};
	const handleQuickPress = () => {
		setCreateQuickReminder(true);
		setHeadingText("Quick Reminder");
	};
	const newReminderBtnProps = {
		createQuickReminder,
		createStandardReminder,
		handleQuickPress,
		handleStandardPress,
	};
	const standardReminderProps = {
		setCreateStandardReminder,
		navigation,
		setHeadingText,
	};
	const quickReminderProps = {
		setCreateQuickReminder,
		navigation,
		setHeadingText,
	};
	return (
		<ScrollView style={styles.screenWrapperStyle}>
			<Header navigation={navigation} />
			<View style={styles.screenBodyStyle}>
				<Text style={styles.screenHeadingStyle}>{headingText}</Text>
				<NewReminderBtns {...newReminderBtnProps} />

				{createStandardReminder && (
					<StandardReminder {...standardReminderProps} />
				)}

				{createQuickReminder && (
					<QuickReminder {...quickReminderProps} />
				)}
			</View>
		</ScrollView>
	);
};

export default CreateReminderScreen;
