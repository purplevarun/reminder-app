import { createContext } from "react";
import StyleData from "./data/StyleData";
const data = {
	name: "Varun Kedia",
	age: 21,
	style: StyleData,
};

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
	return (
		<GlobalContext.Provider value={data}>
			{props.children}
		</GlobalContext.Provider>
	);
};
export default GlobalContextProvider;
