import React from 'react'
import { View, Text, Dimensions } from 'react-native'
const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;
export const HomeScreen = () => {
  
  return (
    <View
        style={{
            flex: 1,
            flexDirection : 'column',
            justifyContent: 'center',
            alignItems: '',
            backgroundColor: '#a09032',
        }}
    >
        <View style = {{
            width : widthScreen*.7,
            height : heightScreen*.2,
            backgroundColor : '#32a048',
        }}>
            <Text>Home Screen</Text>
        </View>
        <View style = {{
            width : widthScreen*.7,
            height : heightScreen*.2,
            backgroundColor : '#a0327f',
        }}>
            <Text>Home Screen</Text>
        </View>
        <View style = {{
            width : widthScreen*.7,
            height : heightScreen*.2,
            backgroundColor : '#72a032',
        }}>
            <Text>Home Screen</Text>
        </View>
    </View>
  )
}
