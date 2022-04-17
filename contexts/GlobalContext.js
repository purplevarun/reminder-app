import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
	const [darkMode, setDarkMode] = useState(false);
	const data = {
		darkMode: {
			darkMode,
			setDarkMode,
		},
	};
	return (
		<GlobalContext.Provider value={data}>
			{props.children}
		</GlobalContext.Provider>
	);
};
export default GlobalContextProvider;
