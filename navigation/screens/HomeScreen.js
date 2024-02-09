import * as React from 'react';
import { Component } from 'react'
import { View, Text, FlatList } from 'react-native';

export default function HomeScreen() {
  state = {
    priorityTasks: [
      { id: '1', task: 'Task 2 for the day' },
      { id: '2', task: 'Task 2 for the day' },
      // Add more tasks as needed
    ],
    dailyTasks: [
      { id: '3', task: 'Task 1 for the day' },
      { id: '4', task: 'Task 2 for the day' },
      // Add more daily tasks as needed
    ],
  };

  
    const { priorityTasks, dailyTasks } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <Text style={{ textAlign: 'left', margin:30, fontSize:30 }}>Welcome Note</Text>
        <FlatList
          
          data={priorityTasks}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={{ width: 150, height: 150, backgroundColor: item.color }}>
              {/* Task card */}
            </View>
          )}
        />
        <FlatList
          data={dailyTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <Text>{item.task}</Text>
            </View>
          )}
        />
      </View>
    );
  }



