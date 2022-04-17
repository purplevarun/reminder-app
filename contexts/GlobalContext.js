import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
	const [darkMode, setDarkMode] = useState(false);
	const colors = {
		light: "yellow",
		dark: "black",
	};
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
