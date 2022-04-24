import { View } from "react-native";
import { QuickReminderBtn, StandardReminderBtn } from "../buttons/Buttons";
const NewReminderBtns = ({
	createQuickReminder,
	createStandardReminder,
	handleStandardPress,
	handleQuickPress,
}) => {
	return (
		<View>
			{!createQuickReminder && !createStandardReminder && (
				<QuickReminderBtn onPress={handleQuickPress} />
			)}
			{!createQuickReminder && !createStandardReminder && (
				<StandardReminderBtn onPress={handleStandardPress} />
			)}
		</View>
	);
};

export default NewReminderBtns;
