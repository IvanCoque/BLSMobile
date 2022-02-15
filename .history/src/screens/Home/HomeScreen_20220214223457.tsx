import React from 'react'
import { View, Text, Dimensions, StyleSheet, SafeAreaView } from 'react-native'
const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;
export const HomeScreen = () => {
  
  return (
    <SafeAreaView
        style={{
            flex: 1,
            flexDirection : 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginVertical : heightScreen * 0.035,
        }}
    >
        <View style = {styles.card}>
            <Text>Home Screen</Text>
        </View>
        <View style = {styles.card}>
            <Text>Home Screen</Text>
        </View>
        <View style = {styles.card}>
            <Text>Home Screen</Text>
        </View>
        
        <View style = {styles.card}>
            <Text>Home Screen</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    card : {
        
            width : widthScreen*.7,
            height : heightScreen*.2,
            backgroundColor : '#c475964c',
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

        
    }
})