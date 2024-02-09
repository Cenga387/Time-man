import * as React from 'react';
import { View, Text } from 'react-native';

export default function SettingsScreen({navigation}) {
    return(
        <View>
            <Text
                onPress={() => alert('This is the settings screen.')}
                style={{ fontSize: 26, fontWeight: 'bold'}}>Settings Screen</Text>
        </View>
    )
}