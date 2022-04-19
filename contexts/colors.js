const appBaseColor = "#001219";
const commonColors = {
	red: "#f8647c",
	green: "green",
	brown: "brown",
	blue: "#0099CC",
};
export const darkModeColors = {
	fg: "white",
	bg: appBaseColor,
	primary: "teal",
	...commonColors,
};
export const lightModeColors = {
	fg: appBaseColor,
	bg: "white",
	primary: "grey",
	...commonColors,
};
