import * as React from 'react';
import { View, Text } from 'react-native';

export default function CalendarScreen({navigation}) {
    return(
        <View>
            <Text
                onPress={() => alert('This is the calendar screen.')}
                style={{ fontSize: 26, fontWeight: 'bold'}}>Calendar Screen</Text>
        </View>
    )
}