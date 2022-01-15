import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, {useContext, useState} from 'react'
import { StyleSheet,SafeAreaView, View, Text,  ImageBackground, TouchableOpacity, Dimensions, TextInput, useWindowDimensions, Platform, KeyboardAvoidingView, Keyboard, ScrollView } from 'react-native'
import { ScreenStackProps } from 'react-native-screens'
import { Background } from '../components/Background'
import { Logo } from '../components/Logo'
import { AuthContext } from '../context/AuthContext'
import { useForm } from '../hooks/useForm'
import { RootStackParams } from '../screens/StackNavigator/StackNavigator'
import { loginStyles } from '../theme/loginTheme'

interface Props extends NativeStackScreenProps<RootStackParams,'LoginScreen'>{};

export const RegisterScreen = ({navigation} : Props) => {
    
    //USEFORM
    const {email, password, nombre, cedula, fecha_nacimiento, sexo, estado_civil, religion, ocupacion, lugar_nacimiento, residencia, domicilio, telefono, estado, imagen, username,onChange} = useForm({
        email : '',
        password : '',
        nombre : '',
        cedula : '',
        fecha_nacimiento : '2018/10/22',
        sexo : '',
        estado_civil: '',
        religion : '',
        ocupacion : '',
        lugar_nacimiento : '',
        residencia : '',
        domicilio : '',
        telefono : '',
        estado : '1',
        imagen : 'https://es.wikipedia.org/wiki/Anas_platyrhynchos_domesticus#/media/Archivo:Anas_platyrhynchos_qtl1.jpg',
        username : '',
    })

    const onRegister = () =>{
        console.log({email, password})
        Keyboard.dismiss();
    }
    
    return (
            <>
            {/*BACKGROUND */}
            <Background/>
            <KeyboardAvoidingView
                style = {{flex: 1, backgroundColor:'#5856D6'}}
                behavior = {Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView>
                    <View
                     style = {loginStyles.formContainer}
                    >


                    </View>
                   
                </ScrollView>
                
            </KeyboardAvoidingView>
        
        </>
        )

}
