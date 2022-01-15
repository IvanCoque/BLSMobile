import React, {useState} from 'react'
import {SafeAreaView, View, Text, Button, ImageBackground, TouchableOpacity } from 'react-native'

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
                    <Text style={{
                        fontSize: 30,
                        color: 'white',
                        top: 0
                    }}>
                        Contador: {contador}
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            setContador(contador + 1)
                        }}
                    >
                        <View style={{
                            backgroundColor: "rgba(",
                            borderRadius: 10,
                            width: 80,
                            height: 30,
                        }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: 'black',
                                    top: 0,
                                    textAlign: 'center',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                +1 
                            </Text>
                        </View>
                    </TouchableOpacity>   
                </View>
            </ImageBackground>
                       
        </SafeAreaView>
        )
}

export default CounterScreen
