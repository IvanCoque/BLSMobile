import React, {useState} from 'react'
import { StyleSheet,SafeAreaView, View, Text,  ImageBackground, TouchableOpacity, Dimensions, TextInput, useWindowDimensions } from 'react-native'

export const LoginScreen = () => {
    const [contador, setContador] = useState(0)
    const [nombreUsuario, onChangeNombreUsuario] = useState("")
    const [contrasenia, onChangeContrasenia] = useState("")
    const {width,height} = useWindowDimensions();
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                style={{
                    flex:1,
                    justifyContent:"center",
                    alignItems:"center",
                    opacity: 0.9
                }}
                source={require('../assets/Login/login.jpg')}
            >
                <View style={styles.viewContainer}>
                    <Text style={{
                        fontSize: 20,
                        marginTop: 90
                    }}>
                        Iniciar Sesión
                    </Text>
                    <Text style={{
                        fontSize: 20,
                        marginTop:50
                    }}>
                        Nombre de Usuario
                    </Text>
                    <TextInput
                        style = {{
                            ...styles.textInput,
                            width: width*0.5,
                            height: height*0.05
                        }}
                        onChangeText={onChangeNombreUsuario}
                        value={nombreUsuario}
                        placeholder='Escriba su nombre de usuario'
                    />
                    
                        
                    <Text style={{
                        fontSize: 20,
                    }}>
                        Contraseña
                    </Text>
                    <TextInput
                        style = {{
                            ...styles.textInput,
                            width: width*0.5,
                            height: height*0.05
                        }}
                        onChangeText={onChangeContrasenia}
                        value={contrasenia}
                        placeholder='Escriba su contraseña'
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        onPress={() => {
                            setContador(contador + 1)
                        }}
                    >
                        <View style={{
                            ...styles.button,
                            width: width*0.5
        
                        }}>
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
            height: 30,
            margin: 30
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
        backgroundColor:"rgba(255,255,255,0.4)",
        marginVertical: 30
    }
  });
  
