import {StatusBar} from "expo-status-bar";
import React, {useState} from "react";
import {Button, StyleSheet, View, FlatList} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
	const [listToDo, setListToDo] = useState([]);
	const [isAddMode, setIsAddMode] = useState(false);

	const addGoalHandler = enteredGoal => {
		// setListToDo([...listToDo, enteredGoal]);
		setListToDo(currentGoals => [
			...currentGoals,
			{id: Math.random().toString(), value: enteredGoal},
		]);
		setIsAddMode(false);
	};

	const removeGoalHandler = goalId => {
		setListToDo(currentList => {
			return currentList.filter(goal => goal.id !== goalId);
		});
	};

	const cancelHandler = () => {
		setIsAddMode(false);
	};

	return (
		<View style={styles.screen}>
			<Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
			<GoalInput
				visible={isAddMode}
				addGoalHandler={addGoalHandler}
				onCancel={cancelHandler}
			/>
			<FlatList
				keyExtractor={(item, index) => item.id}
				data={listToDo}
				renderItem={itemData => (
					<GoalItem
						id={itemData.item.id}
						onDelete={removeGoalHandler}
						title={itemData.item.value}
					/>
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 40,
	},
	input: {
		borderBottomColor: "black",
		borderBottomWidth: 1,
		height: 50,
		width: "75%",
	},
	inputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
});
