import { Text, View, TextInput } from "react-native";

const InputBox = ({ currentText, handleTextChange, colors }) => {
	const titleStyle = {
		color: colors.fg,
		fontSize: 25,
		marginBottom: 10,
	};
	const inputStyle = {
		backgroundColor: colors.bg,
		borderColor: colors.primary,
		color: colors.fg,
		paddingVertical: 10,
		paddingHorizontal: 20,
		fontSize: 25,
		borderRadius: 5,
		borderWidth: 10,
	};
	return (
		<View>
			<Text style={titleStyle}>Description</Text>
			<TextInput
				style={inputStyle}
				autoCorrect={false}
				multiline
				selectTextOnFocus={true}
				value={currentText}
				onChangeText={handleTextChange}
			/>
		</View>
	);
};
export default InputBox;
