import { View, Text } from "react-native";
import { useContext } from "react";
import { GlobalContext } from "../../../contexts/GlobalContext";
const CreatedAt = () => {
	const { colors } = useContext(GlobalContext);
	const getDate = () => {
		const dateString = new Date().toString().slice(0, 24);
		return dateString;
	};
	return (
		<View style={{ margin: 5 }}>
			<Text style={{ color: colors.fg, fontSize: 15 }}>
				Created At {getDate()}
			</Text>
		</View>
	);
};
export default CreatedAt;
