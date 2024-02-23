import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CardLook from './TaskCards/CardLook.js';

function HomeScreen() {
  const [pressedTasks, setPressedTasks] = useState([]);

  const handleTaskPress = (taskId) => {
    // Toggle the pressed state for the task
    setPressedTasks((prevPressedTasks) => {
      if (prevPressedTasks.includes(taskId)) {
        return prevPressedTasks.filter((id) => id !== taskId);
      } else {
        return [...prevPressedTasks, taskId];
      }
    });
  };
  
  
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Welcome -User-</Text>
      <Text style={styles.title2}>Your tasks for today</Text>
      <Text style={styles.title}>Priority Tasks</Text>
      <View style={styles.height}>
      <ScrollView horizontal={true}>
        <CardLook taskTitle={'Task 1'} progress={0.5}></CardLook>
        <CardLook taskTitle={'Task 2'} progress={0.7}></CardLook>
        <CardLook taskTitle={'Task 3'} progress={0.2}></CardLook>
      </ScrollView>
      </View>
      <Text style={styles.title}>Daily Tasks</Text>
      <View>
        <ScrollView style={styles.dailyTasksContainer} showsVerticalScrollIndicator={false}>
        {[1, 2, 3, 4, 5, 6].map((taskId) => (
               <TouchableOpacity
               key={taskId}
               onPress={() => handleTaskPress(taskId)}
               style={[
                 styles.taskContainer1,
                 {
                  borderColor: pressedTasks.includes(taskId) ? '#006EE9' : '#D3D3D3',
                  justifyContent: pressedTasks.includes(taskId) ? 'center' : 'center',
                },               ]}
             >
               <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                 <Text
                   style={[
                     styles.taskTitle1,
                     { color: pressedTasks.includes(taskId) ? '#006EE9' : 'black' },
                   ]}
                 >
                   {'Task ' + taskId}
                 </Text>
                 <View style={styles.radioButton}>
                 {pressedTasks.includes(taskId) && (
                   <View style={styles.radioButtonFilled}></View>
                 )}
                 </View>
               </View>
             </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
      </ScrollView>
    </View>
  )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    
  },
  title: {
    fontSize: 35,
    marginTop: 30,
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 20,
  },
  height:{
    height: 320,
  },
  dailyTasksContainer: {
    marginBottom: 30
  },
  taskContainer1: {
    marginVertical: 10,
    width: '100%',
    height: 60,
    borderColor: '#D3D3D3',
    borderRadius: 15,
    borderWidth: 1,  
  },
  radioButton:{
    width: 25,
    height: 25,
    borderRadius: 12.5,
    borderWidth: 2,
    marginLeft:'auto',
    marginRight: 15,
    borderColor: '#006EE9',
    justifyContent: 'center',
    alignItems: 'center'
  },
  radioButtonFilled: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#006EE9',
  },
  taskTitle1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    textAlignVertical: 'center',
  },
  
});

export default HomeScreen;