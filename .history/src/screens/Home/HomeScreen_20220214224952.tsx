import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text, Dimensions, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native'
const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;
export const HomeScreen = () => {
  const navigation = useNavigation();
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
        <TouchableOpacity
            activeOpacity={0.6}
            onPress = { () =>{
                navigation.navigate('Reserva de Citas'
                )
            }}
        >
            <View style = {styles.card}>
                <Image
                    source={'asas'}
                />
                <Text>Home Screen</Text>
            </View>
            
        </TouchableOpacity>
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
            shadowColor: "#714a4a",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,

            elevation: 8,

        
    }
})