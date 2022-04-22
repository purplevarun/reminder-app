const appBaseColor = "#001219";
const commonColors = {
	red: "#ff4444",
	green: "#00C851",
	purple: "#aa66cc",
	blue: "#0099CC",
};
export const darkModeColors = {
	fg: "white",
	bg: appBaseColor,
	primary: "teal",
	reminderBg: "#082635",
	...commonColors,
};
export const lightModeColors = {
	fg: appBaseColor,
	bg: "white",
	primary: "grey",
	reminderBg: "whitesmoke",
	...commonColors,
};
