import { Modal, View, Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
const ConfirmationalModal = ({ setShowModal, showModal, modalText }) => {
	const { colors, clearReminders } = useContext(GlobalContext);
	const handleDelete = () => {
		clearReminders();
		setShowModal(false);
	};
	const handleCancel = () => {
		setShowModal(false);
	};
	const commonBtnStyles = {
		padding: 10,
		borderRadius: 10,
	};
	const modalStyle = {
		backgroundColor: colors.bg,
		borderWidth: 5,
		borderColor: colors.red,
		width: 350,
		height: 220,
		margin: 0,
		display: "flex",
		alignSelf: "center",
		justifyContent: "space-evenly",
		flexDirection: "column",
		alignItems: "center",
		top: 150,
		...commonBtnStyles,
	};
	const cancelBtnWrapperStyle = {
		backgroundColor: colors.blue,
		...commonBtnStyles,
	};
	const deleteBtnWrapperStyle = {
		backgroundColor: colors.red,
		...commonBtnStyles,
	};
	const modalHeader = { color: colors.fg, fontSize: 25 };
	const modalBtnWrapperStyle = {
		flexDirection: "row",
		justifyContent: "space-evenly",
		width: "100%",
	};
	const textStyle = { color: colors.fg, fontSize: 25 };
	return (
		<Modal animationType="fade" visible={showModal} transparent={true}>
			<View style={modalStyle}>
				<Text style={modalHeader}>{modalText}</Text>
				<View style={modalBtnWrapperStyle}>
					<TouchableOpacity
						onPress={handleCancel}
						style={cancelBtnWrapperStyle}
					>
						<Text style={textStyle}>Cancel</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={handleDelete}
						style={deleteBtnWrapperStyle}
					>
						<Text style={textStyle}>Delete</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
};

export default ConfirmationalModal;
