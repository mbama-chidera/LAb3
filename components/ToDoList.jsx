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
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  taskText: {
    fontSize: 18,
    color: '#333',
  },
});
