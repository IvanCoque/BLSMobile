import React from 'react';
import { View } from 'react-native';

export const Alert = () => {
    Alert.alert(
        "Alert Title",
        "My Alert Msg",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
      );
  return (
      <View>
      </View>

  );
};
