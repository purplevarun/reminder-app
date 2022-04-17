const getFgColor = (darkMode, colors) => {
	return darkMode ? colors.light : colors.dark;
};
const getBgColor = (darkMode, colors) => {
	return darkMode ? colors.dark : colors.light;
};
export const getHeaderStyles = (darkMode, colors) => {
	return {
		headerStyle: {
			backgroundColor: getBgColor(darkMode, colors),
			paddingTop: 30,
			flexDirection: "row",
			height: 100,
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			paddingHorizontal: 20,
			borderBottomWidth: 2,
			borderBottomColor: getFgColor(darkMode, colors),
		},
		headerBtnsStyle: {
			display: "flex",
			flexDirection: "row",
		},
	};
};
