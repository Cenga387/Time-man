import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { useState } from 'react';
import Icon from "react-native-vector-icons/FontAwesome";
import { lightBlue } from '@mui/material/colors';

function AddTaskScreen() {
    const [startDate, setStartDate] = useState(dayjs());
    const [endDate, setEndDate] = useState(dayjs());
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    
    const handleStartDateChange = ({ date }) => {
        setShowStartDatePicker(false);
        const newStartDate = dayjs(date);
        if (newStartDate.isBefore(dayjs(), 'day')) {
          // If the selected date is before today, set it to today
          setStartDate(dayjs());
        } else {
          setStartDate(newStartDate);
        }
      };
    
      const handleEndDateChange = ({ date }) => {
        setShowEndDatePicker(false);
        const newEndDate = dayjs(date);
        if (newEndDate.isBefore(startDate, 'day')) {
          // If the selected date is before the start date, set it to the start date
          setEndDate(startDate);
        } else {
          setEndDate(newEndDate);
        }
      };
      const handleCategoryClick = (category) => {
        setSelectedCategory(category);
      };
    return(
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.pageTitle}>Add Task</Text>
            </View>
            <View style={styles.addTaskContainer}>
                <View style={styles.calendarContainer}>
                    <View style={styles.startContainer}>
                    <Text style={styles.title}>Start</Text>
                    <TouchableOpacity
                    
                        style={styles.startButton}
                        onPress={() => setShowStartDatePicker(true)}
                    >
                         <Icon style={{marginRight: 20, color: '#006EE9'}} name='calendar' size={25}></Icon>
                    <Text>{startDate.format('YYYY-MM-DD')}</Text>
                    </TouchableOpacity>
          {showStartDatePicker && (
            <DateTimePicker
              mode="single"
              date={startDate.toDate()}
              onChange={handleStartDateChange}
            />
          )}
        </View>
        <View style={styles.endContainer}>
          <Text style={styles.title}>End</Text>
          <TouchableOpacity
            style={styles.endButton}
            onPress={() => setShowEndDatePicker(true)}
          >
            <Icon style={{marginRight: 20, color: '#006EE9'}} name='calendar' size={25}></Icon>
            <Text>{endDate.format('YYYY-MM-DD')}</Text>
          </TouchableOpacity>
          {showEndDatePicker && (
            <DateTimePicker
              mode="single"
              date={endDate.toDate()}
              onChange={handleEndDateChange}
            />
          )}
                    </View>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Task Title</Text>
                    <TextInput
          
                    style={styles.taskTitle}
                    placeholder="Task title"
                    onChangeText={(email) => this.setState({ email })}
        />
                </View>
                <View style={styles.categoryContainer}>
                    <Text style={styles.title}>Category</Text>
                    <View style={styles.buttonsContainer}>
                    <TouchableOpacity
              style={[
                styles.button1,
                selectedCategory === 'daily' && { backgroundColor: '#006EE9' },
              ]}
              onPress={() => handleCategoryClick('daily')}
            >
              <Text style={selectedCategory === 'daily' && { color: 'white' }}>Daily task</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button2,
                selectedCategory === 'priority' && { backgroundColor: '#006EE9' },
              ]}
              onPress={() => handleCategoryClick('priority')}
            >
              <Text style={selectedCategory === 'priority' && { color: 'white' }}>Priority task</Text>
            </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.title}>Description</Text>
                    <TextInput
          
                    style={styles.descriptionTitle}
                    placeholder="Description"
                    onChangeText={(email) => this.setState({ email })}
                    />
                </View>
                <View style={styles.addTaskButtonContainer}>
                    <TouchableOpacity style={styles.addTaskButton}>
                        <Text style={{color: 'white', fontSize: 18}}>Create Task</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    topContainer: {
        backgroundColor: '#006EE9',
        height: 100,
        justifyContent: 'center',
    },
    pageTitle: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 15
    },
    addTaskContainer: {
        backgroundColor: 'white',
    },
    calendarContainer: {
        marginHorizontal: 20,
        marginVertical: 15,
        flexDirection: 'row'
    },
    startContainer:{
        width: '50%'
    },
    startButton: {
        flexDirection: 'row',
        width: '94%',
        borderWidth: 0.5,
        borderColor: 'lightgrey',
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15
    },
    endContainer:{
        width: '50%'
    },
    endButton: {
        flexDirection: 'row',
        width: '100%',
        borderWidth: 0.5,
        borderColor: 'lightgrey',
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15
    },
    title: {
        color: '#006EE9',
        fontSize: 18,
        fontWeight: 'bold'
    },
    titleContainer: {
        marginHorizontal: 20,
        marginVertical: 15,
    },
    taskTitle: {
        width: "100%",
    height: 50,
    borderRadius: 10,
    paddingLeft: 10,
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    marginVertical: 15
    },
    categoryContainer: {
        marginHorizontal: 20,
        marginVertical: 15,
    },
    buttonsContainer:{
        flexDirection: 'row',
        marginVertical: 15
    },
    button1:{
        alignItems: "center",
        borderWidth: 0.5,
        borderColor: 'lightgrey',
        minWidth: '48%',
        height: 50,
        justifyContent: "center",
        borderRadius: 10,
        maxWidth: '50%',
        marginRight: 6
    },
    button2:{
        alignItems: "center",
        borderWidth: 0.5,
        borderColor: 'lightgrey',
        minWidth: '48%',
        height: 50,
        justifyContent: "center",
        borderRadius: 10,
        maxWidth: '50%',
        marginLeft: 6
    },
    descriptionContainer:{
        marginHorizontal: 20,
        marginVertical: 15,
    },
    descriptionTitle:{
        width: "100%",
    height: 200,
    borderRadius: 10,
    paddingLeft: 10,
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    marginTop: 15
    },
    addTaskButtonContainer:{
        marginHorizontal: 20,
        alignItems: 'center',
        marginTop: 60
    },
    addTaskButton: {
        borderRadius: 15,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#006EE9',
        
    }
});

export default AddTaskScreen;