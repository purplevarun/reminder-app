import { createContext } from "react";
const data = {};

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
	return (
		<GlobalContext.Provider value={data}>
			{props.children}
		</GlobalContext.Provider>
	);
};
export default GlobalContextProvider;
