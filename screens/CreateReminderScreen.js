import { ScrollView, View, Text } from "react-native";
import { GlobalContext } from "../contexts/GlobalContext";
import { getScreenStyles } from "./screenStyles";
import { useContext, useState } from "react";
import Header from "../components/header/Header";
import {
	CreateReminderBtn,
	QuickReminderBtn,
} from "../components/buttons/Buttons";
import NewReminder from "../components/newReminder/NewReminder";
const CreateReminderScreen = ({ navigation }) => {
	const { colors } = useContext(GlobalContext);
	const styles = getScreenStyles(colors);
	const [createReminder, setCreateReminder] = useState(false);
	const handlePress = () => {
		setCreateReminder(true);
	};
	const newReminderProps = {
		setCreateReminder,
		navigation,
	};
	return (
		<ScrollView style={styles.screenWrapperStyle}>
			<Header navigation={navigation} />
			<View style={styles.screenBodyStyle}>
				<Text style={styles.screenHeadingStyle}>
					Create New Reminder
				</Text>
				<QuickReminderBtn />
				{createReminder ? (
					<NewReminder {...newReminderProps} />
				) : (
					<CreateReminderBtn onPress={handlePress} />
				)}
			</View>
		</ScrollView>
	);
};

export default CreateReminderScreen;
