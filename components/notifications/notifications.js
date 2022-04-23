import * as Notifications from "expo-notifications";
const getTime = (time) => {
	const timeDifference = time.getTime() - new Date().getTime();
	return Math.floor(timeDifference / 1000);
};
const setupNotifications = () => {
	Notifications.setNotificationHandler({
		handleNotification: async () => ({
			shouldShowAlert: true,
			shouldPlaySound: true,
			shouldSetBadge: true,
		}),
	});
};
export const sendNotification = async (text, time) => {
	setupNotifications();
	console.log("notification in ...", getTime(time));
	const notificationToken = await Notifications.scheduleNotificationAsync({
		content: {
			title: text,
			categoryIdentifier: "reminder",
		},
		trigger: {
			seconds: getTime(time),
		},
	});
	return notificationToken;
};
export const cancelNotification = async (id) => {
	await Notifications.cancelScheduledNotificationAsync(id)
		.then(() => {
			console.log("notification with id = ", id, " cancelled!");
		})
		.catch((err) => {
			console.error(err);
		});
};
