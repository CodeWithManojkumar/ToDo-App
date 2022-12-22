import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <TouchableOpacity style={styles.square}></TouchableOpacity>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "dodgerblue",
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
});
export default Task;
