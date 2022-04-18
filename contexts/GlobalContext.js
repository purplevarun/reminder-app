import { useEffect, createContext, useState } from "react";
import { darkModeColors, lightModeColors } from "./colors";
export const GlobalContext = createContext();
const GlobalContextProvider = (props) => {
	const [darkMode, setDarkMode] = useState(false);
	const [colors, setColors] = useState(lightModeColors);
	useEffect(() => {
		setColors(darkMode ? darkModeColors : lightModeColors);
	}, [darkMode]);
	const data = {
		darkMode: {
			darkMode,
			setDarkMode,
		},
		colors,
	};
	return (
		<GlobalContext.Provider value={data}>
			{props.children}
		</GlobalContext.Provider>
	);
};
export default GlobalContextProvider;
