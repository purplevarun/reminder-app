export const getHeaderStyles = (colors) => {
	return {
		headerStyle: {
			backgroundColor: colors.bg,
			paddingTop: 10, // 30
			flexDirection: "row",
			height: 80, // 100
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			paddingHorizontal: 20,
			borderBottomWidth: 2,
			borderBottomColor: colors.fg,
		},
		headerBtnsStyle: {
			display: "flex",
			flexDirection: "row",
		},
	};
};
