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
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: '#a09032',
            
        }}
    >
        <View style = {{
            width : widthScreen*.7,
            height : heightScreen*.2,
            backgroundColor : '#32a048',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius : 10
        }}>
            <Text>Home Screen</Text>
        </View>
        <View style = {{
            width : widthScreen*.7,
            height : heightScreen*.2,
            backgroundColor : '#a0327f',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius : 10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,

            elevation: 8,

        }}>
            <Text>Home Screen</Text>
        </View>
        <View style = {{
            width : widthScreen*.7,
            height : heightScreen*.2,
            backgroundColor : '#72a032',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius : 10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,

            elevation: 8,

        }}>
            <Text>Home Screen</Text>
        </View>
        
        <View style = {{
            width : widthScreen*.7,
            height : heightScreen*.2,
            backgroundColor : '#72a032',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius : 10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,

            elevation: 8,
        }}>
            <Text>Home Screen</Text>
        </View>
    </View>
  )
}
