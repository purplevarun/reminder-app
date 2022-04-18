import { View, Text } from "react-native";
import { GlobalContext } from "../contexts/GlobalContext";
import { getScreenStyles } from "./screenStyles";
import { useContext, useState } from "react";
import Header from "../components/header/Header";
import { CreateReminderBtn } from "../components/buttons/Buttons";
import NewReminder from "../components/newReminder/NewReminder";
const CreateReminderScreen = ({ navigation }) => {
	const styles = getScreenStyles(useContext(GlobalContext).colors);
	const [createReminder, setCreateReminder] = useState(false);
	const handlePress = () => {
		setCreateReminder(true);
	};
	const newReminderProps = {
		setCreateReminder,
	};
	return (
		<View style={styles.screenWrapperStyle}>
			<Header navigation={navigation} />
			<View style={styles.screenBodyStyle}>
				<Text style={styles.screenHeadingStyle}>
					Create New Reminder
				</Text>
				{createReminder ? (
					<NewReminder {...newReminderProps} />
				) : (
					<CreateReminderBtn onPress={handlePress} />
				)}
			</View>
		</View>
	);
};

export default CreateReminderScreen;
