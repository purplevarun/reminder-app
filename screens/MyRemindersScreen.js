import { View, ScrollView, Text, FlatList } from "react-native";
import Header from "../components/header/Header";
import { getScreenStyles } from "./screenStyles";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import SavedReminder from "../components/SavedReminder";
const MyRemindersScreen = ({ navigation }) => {
	const { colors, reminders } = useContext(GlobalContext);
	const styles = getScreenStyles(colors);
	const renderElements = () => {
		return (
			<View>
				{reminders.map((reminder, idx) => {
					return (
						<SavedReminder
							text={reminder.text}
							date={reminder.date}
							id={reminder.id}
							key={idx}
						/>
					);
				})}
			</View>
		);
	};
	return (
		<View style={styles.screenWrapperStyle}>
			<Header navigation={navigation} />
			<View style={styles.screenBodyStyle}>
				<Text style={styles.screenHeadingStyle}>My Reminders</Text>
				<FlatList
					data={reminders}
					renderItem={({ item, index }) => (
						<SavedReminder
							text={item.text}
							date={item.date}
							id={item.id}
							key={index}
						/>
					)}
				/>
			</View>
		</View>
	);
};

export default MyRemindersScreen;
