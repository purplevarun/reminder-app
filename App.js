import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateReminderScreen from "./screens/CreateReminderScreen";
import MyRemindersScreen from "./screens/MyRemindersScreen";
import SettingsScreen from "./screens/SettingsScreen";
const App = () => {
	const Stack = createNativeStackNavigator();
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName="Create Reminder"
			>
				<Stack.Screen
					name="Create Reminder"
					component={CreateReminderScreen}
				/>
				<Stack.Screen
					name="My Reminders"
					component={MyRemindersScreen}
				/>
				<Stack.Screen
					name="Settings Screen"
					component={SettingsScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};
export default App;
