import React from 'react';
import { View, Alert } from 'react-native';

interface Props { 
    title: string;
    
}

export const AlertComponent = (title, message , buttons) => {
    Alert.alert(
        title,
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
