export const getScreenStyles = (colors) => {
	return {
		screenWrapperStyle: {
			backgroundColor: colors.bg,
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
			paddingVertical: 20,
			color: colors.fg,
		},
	};
};
