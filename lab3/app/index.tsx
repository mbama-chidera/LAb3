import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ToDoList from '../components/ToDoList';

export default function App() {
  
  const [tasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Task List</Text>

      
      <ToDoList tasks={tasks} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});
