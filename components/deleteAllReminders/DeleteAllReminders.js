import { TouchableOpacity, Text } from "react-native";
import { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import ConfirmationalModal from "../confirmationalModal/ConfirmationalModal";
const DeleteAllReminders = () => {
	const { colors } = useContext(GlobalContext);
	const textStyle = { fontSize: 25, color: colors.fg };
	const btnStyle = {
		borderWidth: 2,
		borderColor: colors.red,
		display: "flex",
		flexDirection: "row",
		alignSelf: "center",
		padding: 10,
		marginVertical: 20,
		borderRadius: 10,
		backgroundColor: colors.red,
	};
	const [showModal, setShowModal] = useState(false);
	const modalProps = {
		showModal,
		setShowModal,
		modalText: "Delete All Reminders?",
	};
	const handlePress = () => {
		setShowModal(!showModal);
	};
	return (
		<TouchableOpacity style={btnStyle} onPress={handlePress}>
			<Text style={textStyle}>Delete All Reminders</Text>
			{showModal && <ConfirmationalModal {...modalProps} />}
		</TouchableOpacity>
	);
};

export default DeleteAllReminders;
