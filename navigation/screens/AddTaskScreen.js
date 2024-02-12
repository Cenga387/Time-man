import * as React from 'react';
import { View, Text } from 'react-native';

export default function AddTaskScreen({navigation}) {
    return(
        <View>
            <Text
                onPress={() => alert('This is the add task screen.')}
                style={{ fontSize: 26, fontWeight: 'bold'}}>Add Task Screen</Text>
        </View>
    )
}