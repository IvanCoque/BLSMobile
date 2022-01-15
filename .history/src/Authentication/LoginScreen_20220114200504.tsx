import React, {useState} from 'react'
import { StyleSheet,SafeAreaView, View, Text, Button, ImageBackground, TouchableOpacity, Dimensions } from 'react-native'

export const LoginScreen = () => {
    const [contador, setContador] = useState(0)
    const dimension = Dimensions(width,)
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
                        fontSize: 20,
                        color: 'white',
                    }}>
                        Nombre De Usuario: 
                    </Text>
                    <Text style={{
                        fontSize: 20,
                        color: 'white',
                        top: 0,
                    }}>
                        Contador: {contador}
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            setContador(contador + 1)
                        }}
                    >
                        <View style={styles.button}>
                            <Text
                                style={styles.textButton}
                            >
                                Iniciar Sesión
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
            alignItems: 'center',
            backgroundColor:"red"

    },
    button: {
            backgroundColor: "rgba(255,255,255,0.2)",
            borderRadius: 10,
            width: "70%",
            height: 30,
            top: 30
        
    },
    textButton: {    
            fontSize: 20,
            color: 'white',
            top: 0,
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
    }
  });
  
