import React, {useState} from "react";
import {Button, StyleSheet, TextInput, View, Modal} from "react-native";

function GoalInput({onCancel, visible, addGoalHandler}) {
	const [enteredGoal, setEnteredGoal] = useState("");

	const goalInputHandler = enteredText => {
		setEnteredGoal(enteredText);
	};

	const addHandler = () => {
		addGoalHandler(enteredGoal);
		setEnteredGoal("");
	};

	return (
		<Modal visible={visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="What's your Goal for today?"
					style={styles.input}
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Cancel" color="red" onPress={onCancel} />
					</View>
					<View style={styles.button}>
						<Button title="Add" onPress={addHandler} />
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	input: {
		borderBottomColor: "black",
		borderBottomWidth: 1,
		height: 50,
		width: "75%",
		marginBottom: 10,
	},
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		width: "40%",
	},
	buttonContainer: {
		flexDirection: "row-reverse",
		justifyContent: "space-between",
		width: "60%",
		paddingTop: 20,
	},
});

export default GoalInput;
