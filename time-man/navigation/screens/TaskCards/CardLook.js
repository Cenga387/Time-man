import * as React from 'react';
import * as Progress from 'react-native-progress';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import TaskDetailsScreen from './TaskDetailsScreen';

function CardLook({taskTitle, progress}) {
    const navigation = useNavigation();

    return (
    <TouchableOpacity onPress={() => navigation.navigate('Task Details')}>
        <View style={styles.taskContainer}>
          <Text style={styles.taskTitle}>{taskTitle}</Text>
          <Text style={styles.subtitle1}>Progress</Text>
          <Progress.Bar progress={progress} width={150} height={10} color='white'/>
          <Text style={styles.subtitle1}>{`${(progress * 100).toFixed(0)}%`}</Text>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    taskContainer: {
        padding: 16,
        marginRight: 8,
        backgroundColor: '#006EE9',
        marginVertical: 10,
        width: 200,
        height: 300,
        borderRadius: 20,
        justifyContent: 'center',
    },
    taskTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    subtitle1:{
        color: 'white'
    }

});
export default CardLook