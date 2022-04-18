import { View, Text } from "react-native";
import Header from "../components/header/Header";
import screenStyles from "./screenStyles";
const MyRemindersScreen = ({ navigation }) => {
	return (
		<View style={screenStyles().screenWrapperStyle}>
			<Header navigation={navigation} />
			<View style={screenStyles().screenBodyStyle}>
				<Text style={screenStyles().screenHeadingStyle}>
					My Reminders
				</Text>
			</View>
		</View>
	);
};

export default MyRemindersScreen;
