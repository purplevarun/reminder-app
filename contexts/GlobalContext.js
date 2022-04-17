import { createContext } from "react";
export const GlobalContext = createContext();
export const data = {
	name: "Varun Kedia",
};

const GlobalContextProvider = (props) => {
	return (
		<GlobalContext.Provider value={data}>
			{props.children}
		</GlobalContext.Provider>
	);
};
export default GlobalContextProvider;
