const blackColor = "black";
const whiteColor = "white";
export const screenWrapperStyle = {
	backgroundColor: "white",
	flex: 1,
	justifyContent: "flex-start",
};
export const screenBodyStyle = {
	padding: 10,
	flex: 1,
	flexDirection: "column",
};
export const screenHeadingStyle = {
	fontSize: 30,
	alignSelf: "center",
	fontWeight: "bold",
	paddingBottom: 20,
};
export const getScreenStyles = (darkMode) => {
	return {
		screenWrapperStyle: {
			backgroundColor: darkMode ? blackColor : whiteColor,
			flex: 1,
			justifyContent: "flex-start",
		},
		screenBodyStyle: {
			padding: 10,
		},
	};
};
