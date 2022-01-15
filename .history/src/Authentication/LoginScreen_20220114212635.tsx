import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, {useState} from 'react'
import { StyleSheet,SafeAreaView, View, Text,  ImageBackground, TouchableOpacity, Dimensions, TextInput, useWindowDimensions } from 'react-native'

export const LoginScreen = () => {
    const [nombreUsuario, onChangeNombreUsuario] = useState("")
    const [contrasenia, onChangeContrasenia] = useState("")
    const {width,height} = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<any,any>>();
   
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                style={{
                    flex:1,
                    justifyContent:"center",
                    alignItems:"center",
                }}
                imageStyle={{
                    opacity: 0.5
                }}
                source={require('../assets/Login/login.jpg')}
            >
                <View style={styles.viewContainer}>
                    <Text style={{
                        fontSize: 20,
                        marginTop: 90,
                        fontWeight:'bold',
                        color: '#6893a9'
                    }}>
                        INICIAR SESIÓN
                    </Text>
                    <Text style={{
                        fontSize: 20,
                        marginTop:50,
                        color: '#6893a9'
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
                        color: '#6893a9'
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
                    <Text style={{
                        fontSize: 12,
                        color: '#6893a9'
                    }}>
                        ¿No tienes una cuenta?
                        <TouchableOpacity
                            onPress={navigation.navigate('')}
                        >
                                <Text
                                    style={{
                                        fontSize: 15,
                                        color:'#074fdf',
                                        marginTop: 23,
                                        fontWeight: 'bold'
                                    }}
                                >
                                    ,  REGISTRATE
                                </Text>
                        </TouchableOpacity>
                    </Text>
                    <TouchableOpacity
                
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
            marginVertical: 50
    },
    textButton: {    
            fontSize: 20,
            //color: 'white',
            top: 0,
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            color: "#1c5fbd",
            fontWeight: 'bold'
    },
    textInput : {
        backgroundColor:"rgba(255,255,255,0.4)",
        marginVertical: 20,
        borderRadius:10
    }
  });
  
