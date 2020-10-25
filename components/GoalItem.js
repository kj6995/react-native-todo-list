import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";

function GoalItem({id, title, onDelete}) {
	return (
		<TouchableOpacity activeOpacity={0.4} onPress={() => onDelete(id)}>
			<View style={styles.listItem}>
				<Text>{title}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	listItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: "#ccc",
		borderColor: "#000",
		borderWidth: 1,
	},
});

export default GoalItem;
