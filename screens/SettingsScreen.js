import { View, Text } from "react-native";
import Header from "../components/header/Header";
import { screenBodyStyle, screenWrapperStyle } from "./screenStyles";
const SettingsScreen = ({ navigation }) => {
	const navProp = {
		navigation: navigation,
	};
	return (
		<View style={screenWrapperStyle}>
			<Header {...navProp} />
			<View style={screenBodyStyle}>
				<Text>Settings Screen</Text>
			</View>
		</View>
	);
};

export default SettingsScreen;
