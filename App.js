import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    if (task !== null && task.trim().length !== 0) {
      Keyboard.dismiss();
      setTaskItems([...taskItems, task]);
      setTask(null);
    }
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {/* This is where tasks will go  */}

          {taskItems.map((item, index) => {
            return (
              <TouchableOpacity onPress={() => completeTask(index)}>
                <Task key={index} text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* wRITE tASK */}
      <KeyboardAvoidingView
        behaviour={Platform.Os === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a Task"}
          value={task}
          onChangeText={(text) => {
            setTask(text);
          }}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addtext}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },

  writeTaskWrapper: {
    position: "absolute",
    bottom: 40,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    padding: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 60,
    width: 250,
    borderColor: "#C0C0C0",
  },
  addWrapper: {
    height: 60,
    width: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
    fontSize: 100,
  },
});
