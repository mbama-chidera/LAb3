import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function ToDoList({ tasks }) {
  return (
    <View>
      
      {tasks.map((task, index) => (
        <View key={index} style={styles.taskItem}>
          <Text style={styles.taskText}>{task}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  taskText: {
    fontSize: 18,
    color: '#333',
  },
});
