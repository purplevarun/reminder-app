import { View, Text } from "react-native";
import Header from "../components/header/Header";
import screenStyles from "./screenStyles";
const CreateReminderScreen = ({ navigation }) => {
	return (
		<View style={screenStyles().screenWrapperStyle}>
			<Header navigation={navigation} />
			<View style={screenStyles().screenBodyStyle}>
				<Text style={screenStyles().screenHeadingStyle}>
					Create New Reminder
				</Text>
			</View>
		</View>
	);
};

export default CreateReminderScreen;
