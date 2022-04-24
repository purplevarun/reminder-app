import { ScrollView, View, Text } from "react-native";
import { GlobalContext } from "../contexts/GlobalContext";
import { getScreenStyles } from "./screenStyles";
import { useContext, useState } from "react";
import Header from "../components/header/Header";

import StandardReminder from "./../components/standardReminder/StandardReminder";
import NewReminderBtns from "../components/newReminderBtns/NewReminderBtns";
const CreateReminderScreen = ({ navigation }) => {
	const { colors } = useContext(GlobalContext);
	const styles = getScreenStyles(colors);
	const [createStandardReminder, setCreateStandardReminder] = useState(false);
	const [createQuickReminder, setCreateQuickReminder] = useState(false);
	const handleStandardPress = () => {
		setCreateStandardReminder(true);
	};
	const handleQuickPress = () => {
		setCreateQuickReminder(true);
	};
	const standardReminderProps = {
		setCreateStandardReminder,
		navigation,
	};
	const newReminderBtnProps = {
		createQuickReminder,
		createStandardReminder,
		handleQuickPress,
		handleStandardPress,
	};
	return (
		<ScrollView style={styles.screenWrapperStyle}>
			<Header navigation={navigation} />
			<View style={styles.screenBodyStyle}>
				<Text style={styles.screenHeadingStyle}>
					Create New Reminder
				</Text>
				<NewReminderBtns {...newReminderBtnProps} />

				{createStandardReminder && (
					<StandardReminder {...standardReminderProps} />
				)}
			</View>
		</ScrollView>
	);
};

export default CreateReminderScreen;
