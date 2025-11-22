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

  const addTask = (taskText) => {
    const clean = taskText.trim();
    if (!clean) return;                          // prevent empty tasks
    if (tasks.includes(clean)) return;           // prevent duplicates

    setTasks([...tasks, clean]);                 // add new task
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Task List</Text>

      <ToDoList tasks={tasks} />

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
