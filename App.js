import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, View, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";

import GoalsList from "./components/GoalsList";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalOn, setIsModalOn] = useState(false);

  const addGoalHandeler = (newGoal) => {
    setGoals((prevState) => [
      ...prevState,
      { id: Math.random().toString(), value: newGoal },
    ]);

    setIsModalOn(false);
  };

  const deleteGoalHandler = (goalId) => {
    setGoals((currentState) =>
      currentState.filter((goal) => goal.id !== goalId)
    );
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsModalOn(true)} />
      <GoalInput
        onDelete={() => setIsModalOn(false)}
        onModalShow={isModalOn}
        addGoal={addGoalHandeler}
      />

      <FlatList
        data={goals}
        renderItem={(itemData) => (
          <GoalsList
            data={itemData.item.value}
            onDelete={deleteGoalHandler}
            id={itemData.item.id}
          />
        )}
      />

      {/* This also work but it generates all the data evenif we can't see on the screen without scrolling */}
      {/* <ScrollView>
        {goals.map((goal) => (
          <View key={goal.id} style={styles.itemList}>
            <Text>{goal.value}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    width: "80%",
  },
});
