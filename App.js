import Router from "./router/Router";
import GlobalContext from "./contexts/GlobalContext";
const App = () => {
	return (
		<GlobalContext>
			<Router />
		</GlobalContext>
	);
};
export default App;
