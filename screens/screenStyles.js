import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
const ScreenStyles = () => {
	const { colors } = useContext(GlobalContext);
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
			paddingBottom: 20,
			color: colors.fg,
		},
	};
};
export { ScreenStyles as default };
