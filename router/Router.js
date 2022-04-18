import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateReminderScreen from "./../screens/CreateReminderScreen";
import { View } from "react-native";
import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import MyRemindersScreen from "./../screens/MyRemindersScreen";
import SettingsScreen from "./../screens/SettingsScreen";
const Router = () => {
	const Stack = createNativeStackNavigator();
	const { colors } = useContext(GlobalContext);
	return (
		<View style={{ flex: 1, backgroundColor: colors.bg }}>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
						animation: "slide_from_right",
					}}
					initialRouteName="Screen_1_Add_Reminder"
				>
					<Stack.Screen
						name="Screen_1_Add_Reminder"
						component={CreateReminderScreen}
					/>
					<Stack.Screen
						name="Screen_2_All_Reminders"
						component={MyRemindersScreen}
					/>
					<Stack.Screen
						name="Screen_3_Settings"
						component={SettingsScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
};
export default Router;
