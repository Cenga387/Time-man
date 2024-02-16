import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import { useState } from 'react';

function AddTaskScreen() {
    const [date, setDate] = useState(dayjs())
    return(
        <View style={styles.container}>
            <View style={styles.topContainer}></View>
            <View style={styles.addTaskContainer}>
                <View style={styles.calendarContainer}>
                    <View>
                        <Text>Start</Text>
                    </View>
                    <View>
                        <Text>End</Text>
                    </View>
                </View>
                <View style={styles.titleContainer}>
                    <Text>Task Title</Text>
                </View>
                <View style={styles.categoryContainer}>
                    <Text>Category</Text>
                </View>
                <View>
                    <Text>Description</Text>
                </View>
                <View>
                    
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
        justifyContent: 'center'
    },
    addTaskContainer: {
        backgroundColor: 'white',
    },
    calendarContainer: {
        backgroundColor: "white",
        flexDirection: 'row'
    },
    titleContainer: {

    },
    categoryContainer: {

    },
});

export default AddTaskScreen;