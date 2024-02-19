import * as React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { useState } from 'react';
import { color } from '@mui/system';

function AddTaskScreen() {
    const [date, setDate] = useState(dayjs())
    return(
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.pageTitle}>Add Task</Text>
            </View>
            <View style={styles.addTaskContainer}>
                <View style={styles.calendarContainer}>
                    <View style={styles.startContainer}>
                        <Text style={styles.title}>Start</Text>
                        <TouchableOpacity style={styles.startButton}>
                            <Text>Date</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.endContainer}>
                        <Text style={styles.title}>End</Text>
                        <TouchableOpacity style={styles.endButton}>
                            <Text>Date</Text>
                        </TouchableOpacity>
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
                        <TouchableOpacity style={styles.button1}>
                        <Text>Daily task</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button2}>
                        <Text>Priority task</Text>
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