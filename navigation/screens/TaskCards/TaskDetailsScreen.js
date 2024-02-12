import React from 'react';
import { View, Text } from 'react-native';

function TaskDetailsScreen ({ route }) {
  // const task  = route.params;

  return (
    <View>
      <Text>Task 1</Text>
      {/* <Text>{task.description}</Text> */}
    </View>
  );
};

export default TaskDetailsScreen;