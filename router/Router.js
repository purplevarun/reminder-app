import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../components/header/Header";
import CreateReminderScreen from "./../screens/CreateReminderScreen";
import MyRemindersScreen from "./../screens/MyRemindersScreen";
import SettingsScreen from "./../screens/SettingsScreen";
const Router = () => {
	const Stack = createNativeStackNavigator();
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
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
	);
};
export default Router;
