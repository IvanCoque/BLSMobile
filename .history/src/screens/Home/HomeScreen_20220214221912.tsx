import React from 'react'
import { View, Text } from 'react-native'
const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;
export const HomeScreen = () => {
  
  return (
    <View
        style={{
            flex: 1,
            flexDirection : 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#a09032',
        }}
    >
        <View>
            <Text>Home Screen</Text>
        </View>
        <View>
            <Text>Home Screen</Text>
        </View>
        <View>
            <Text>Home Screen</Text>
        </View>
    </View>
  )
}
