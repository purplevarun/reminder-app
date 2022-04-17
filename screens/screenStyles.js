const getFgColor = (darkMode, colors) => {
	return darkMode ? colors.light : colors.dark;
};
const getBgColor = (darkMode, colors) => {
	return darkMode ? colors.dark : colors.light;
};
export const getScreenStyles = (darkMode, colors) => {
	return {
		screenWrapperStyle: {
			backgroundColor: getBgColor(darkMode, colors),
			flex: 1,
			justifyContent: "flex-start",
		},
		screenBodyStyle: {
			padding: 10,
		},
		screenHeadingStyle: {
			fontSize: 30,
			alignSelf: "center",
			fontWeight: "bold",
			paddingBottom: 20,
			color: getFgColor(darkMode, colors),
		},
	};
};
