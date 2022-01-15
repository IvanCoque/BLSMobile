import React, {useState} from 'react'
import {SafeAreaView, View, Text, Button, ImageBackground } from 'react-native'

const CounterScreen = () => {
    const [contador, setContador] = useState(0)
    return (
        <SafeAreaView style={{
            flex: 1,
        }}>
            <ImageBackground
                style={{
                    flex:1,

                }}
                source={require('../assets/Login/login.jpg')}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>

                </View>
            </ImageBackground>
                       
        </SafeAreaView>
        )
}

export default CounterScreen
