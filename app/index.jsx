import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

export default function App() {
  
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  // Add Task Function
  const addTask = (taskText) => {
    setTasks([...tasks, taskText]); // update list
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Task List</Text>

      {/* Task List */}
      <ToDoList tasks={tasks} />

      {/* Form that adds tasks */}
      <ToDoForm addTask={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});
