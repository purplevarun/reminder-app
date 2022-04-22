import { View, Text, FlatList } from "react-native";
import Header from "../components/header/Header";
import { getScreenStyles } from "./screenStyles";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import SavedReminder from "../components/savedReminder/SavedReminder";
const MyRemindersScreen = ({ navigation }) => {
	const { colors, reminders } = useContext(GlobalContext);
	const styles = getScreenStyles(colors);
	return (
		<View style={styles.screenWrapperStyle}>
			<Header navigation={navigation} />
			<View style={styles.screenBodyStyle}>
				<Text style={styles.screenHeadingStyle}>My Reminders</Text>
				<FlatList
					data={reminders}
					renderItem={({ item, index }) => (
						<SavedReminder item={item} key={index} />
					)}
					contentContainerStyle={{ flexGrow: 1 }}
				/>
			</View>
		</View>
	);
};

export default MyRemindersScreen;
