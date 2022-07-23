import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalsList = ({ data, onDelete, id }) => {
  return (
    <TouchableOpacity onPress={onDelete.bind(this, id)}>
      <View style={styles.itemList}>
        <Text>{data}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemList: {
    padding: 10,
    borderColor: "#aaa",
    backgroundColor: "#eee",
    marginVertical: 10,
    borderWidth: 1,
  },
});

export default GoalsList;
