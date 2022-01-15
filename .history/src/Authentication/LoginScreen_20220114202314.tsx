import React, {useState} from 'react'
import { StyleSheet,SafeAreaView, View, Text,  ImageBackground, TouchableOpacity, Dimensions, TextInput } from 'react-native'

export const LoginScreen = () => {
    const [contador, setContador] = useState(0)
    const [text, onChangeText] = useState("Nombre de Usuario")

    const dimension = Dimensions.get("screen")
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                style={{
                    flex:1,
                    justifyContent:"center",
                    alignItems:"center"
                }}
                source={require('../assets/Login/login.jpg')}
            >
                <View style={styles.viewContainer}>
                    <Text style={{
                        fontSize: 20,
                        marginTop: 90
                    }}>
                        Nombre De Usuario: 
                    </Text>
                    <TextInput
                        style = {styles.textInput}
                        onChangeText={onChangeText}
                        value={}
                    >

                    </TextInput>
                    <Text style={{
                        fontSize: 20,
                    }}>
                        Nombre De Usuario: 
                    </Text>
                    <Text style={{
                        fontSize: 20,
                        //color: 'white',
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
            backgroundColor:"rgba(255,255,255,0.4)",
            width: "75%",
            height: "75%",
            justifyContent: "flex-start",
            alignItems: "center",
            borderRadius: 10,
            color: 'black',

    },
    button: {
            backgroundColor: "rgba(255,255,255,0.6)",
            borderRadius: 10,
            width: "70%",
            height: 30,
            top: 30
        
    },
    textButton: {    
            fontSize: 20,
            //color: 'white',
            top: 0,
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
    },
    textInput : {
        width: 100,
        height: 100
    }
  });
  
