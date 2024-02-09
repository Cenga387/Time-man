import * as React from 'react';
import { View, Text } from 'react-native';

export default function CalendarScreen({navigation}) {
    return(
        <View>
            <Text
                onPress={() => alert('This is the add task screen.')}
                style={{ fontSize: 26, fontWeight: 'bold'}}>Add Task Screen</Text>
        </View>
    )
}