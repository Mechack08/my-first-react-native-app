import react, { useState } from "react";

import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = ({ addGoal, onModalShow, onDelete }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const enteredGoalHandeler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addNewGoalHandler = () => {
    addGoal(enteredGoal);

    setEnteredGoal("");
  };

  return (
    <Modal visible={onModalShow} animationType="slide">
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Your Goal here"
          style={styles.input}
          onChangeText={enteredGoalHandeler}
          value={enteredGoal}
        />
        {/* First way can also work */}
        {/* <Button title="ADD" onPress={() => addGoal(enteredGoal)} /> */}
        <View style={styles.btnWraper}>
          <View style={styles.btn}>
            <Button title="CANCEL" color="red" onPress={onDelete} />
          </View>
          <View style={styles.btn}>
            <Button title="ADD" onPress={addNewGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  input: {
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
    width: "80%",
    marginBottom: 10,
  },
  btnWraper: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "80%",
  },
  btn: {
    width: "40%",
  },
});

export default GoalInput;
