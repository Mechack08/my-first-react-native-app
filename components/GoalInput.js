import react, { useState } from "react";

import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = ({ addGoal }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const enteredGoalHandeler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        placeholder="Your Goal here"
        style={styles.input}
        onChangeText={enteredGoalHandeler}
        value={enteredGoal}
      />
      {/* First way can also work */}
      {/* <Button title="ADD" onPress={() => addGoal(enteredGoal)} /> */}
      <Button title="ADD" onPress={addGoal.bind(this, enteredGoal)} />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default GoalInput;
