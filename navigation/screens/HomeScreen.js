import * as React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CardLook from './TaskCards/CardLook.js';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
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
        <ScrollView>
        <View style={styles.taskContainer1}>
          <Text style={styles.taskTitle1}>Task 1</Text>
        </View>
        <View style={styles.taskContainer1}>
          <Text style={styles.taskTitle1}>Task 1</Text>
        </View>
        <View style={styles.taskContainer1}>
          <Text style={styles.taskTitle1}>Task 1</Text>
        </View>
        <View style={styles.taskContainer1}>
          <Text style={styles.taskTitle1}>Task 1</Text>
        </View>
        <View style={styles.taskContainer1}>
          <Text style={styles.taskTitle1}>Task 1</Text>
        </View>
        <View style={styles.taskContainer1}>
          <Text style={styles.taskTitle1}>Task 1</Text>
        </View>
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
  
  taskContainer1:{
    marginVertical: 10,
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    justifyContent: 'center',
    borderRadius: 15,
  },
  taskTitle1: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  
});

export default HomeScreen;