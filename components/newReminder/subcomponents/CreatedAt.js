import { View, Text } from "react-native";
import { useContext } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
const CreatedAt = () => {
	const getNeatTime = () => {
		return new Date().toString().slice(0, 24);
	};
	const { colors } = useContext(GlobalContext);
	return (
		<View style={{ margin: 5 }}>
			<Text style={{ color: colors.fg, fontSize: 15 }}>
				Created At {getNeatTime()}
			</Text>
		</View>
	);
};
export default CreatedAt;
