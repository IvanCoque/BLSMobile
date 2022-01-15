import React, {useState} from 'react'
import { StyleSheet,SafeAreaView, View, Text, Button, ImageBackground, TouchableOpacity } from 'react-native'

const CounterScreen = () => {
    const [contador, setContador] = useState(0)
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                style={{
                    flex:1,

                }}
                source={require('../assets/Login/login.jpg')}
            >
                <View style={styles.viewContainer}>
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
                        <View style={styles.}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: 'white',
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
const styles = StyleSheet.create({
    container: {
            flex: 1,
        
    },
    viewContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        
    }
  });
  

export default CounterScreen
