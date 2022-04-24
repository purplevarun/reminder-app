export const getScreenStyles = (colors) => {
	return {
		screenWrapperStyle: {
			backgroundColor: colors.bg,
			height: "100%",
		},
		screenBodyStyle: {
			padding: 10,
			flex: 1,
		},
		screenHeadingStyle: {
			fontSize: 30,
			width: "100%",
			alignSelf: "center",
			textAlign: "center",
			fontWeight: "bold",
			paddingVertical: 20,
			color: colors.fg,
		},
	};
};
