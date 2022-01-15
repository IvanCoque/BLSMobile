import React, {useContext, useState} from 'react'
import { StyleSheet,SafeAreaView, View, Text,  ImageBackground, TouchableOpacity, Dimensions, TextInput, useWindowDimensions, Platform, KeyboardAvoidingView, Keyboard } from 'react-native'
import { ScreenStackProps } from 'react-native-screens'
import { Background } from '../components/Background'
import { Logo } from '../components/Logo'
import { AuthContext } from '../context/AuthContext'
import { useForm } from '../hooks/useForm'
import { RootStackParams } from '../screens/StackNavigator/StackNavigator'
import { loginStyles } from '../theme/loginTheme'

export const RegisterScreen = () => {
    
    //USEFORM
    const {email, password, onChange} = useForm({
        email : '',
        password : '',
    })

    const onLogin = () =>{
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
                <View style = {loginStyles.formContainer}>
                    {/* Keyboard avoid view*/}
                    <Logo/>
                    <Text style={loginStyles.title}>Login</Text>
                    
                    <Text style={loginStyles.label}>Email</Text>
                    <TextInput
                        placeholder='Ingrese su email'
                        placeholderTextColor = 'rgba(255,255,255,0.4)'
                        keyboardType='email-address'
                        underlineColorAndroid="white"
                        style = {[
                                    loginStyles.inputField,
                                    (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                                ]}
                        selectionColor='white'
                        onChangeText={ (value) => onChange(value, 'email')}
                        value = {email}  
                        onSubmitEditing={onLogin}
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
                    <Text style={loginStyles.label}>Contraseña</Text>
                    <TextInput
                        placeholder='Ingrese su contraseña'
                        placeholderTextColor = 'rgba(255,255,255,0.4)'
                        
                        underlineColorAndroid="white"
                        style = {[
                                    loginStyles.inputField,
                                    (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                                ]}
                        selectionColor='white'
                        onChangeText={ (value) => onChange(value, 'password')}
                        value = {password}     
                        secureTextEntry
                        onSubmitEditing={onLogin}  
                    />

                    {/*Button Login */}
                    <View 
                        style = {loginStyles.buttonContainer}
                    >
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style = {loginStyles.button}
                            onPress = {onLogin}
                        >
                            <Text style = {loginStyles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {loginStyles.newUserContainer}>
                                <TouchableOpacity
                                    activeOpacity={.8}
                                    onPress ={()=>{navigation.replace('RegisterScreen')}}
                                >
                                    <Text style = {loginStyles.buttonText}></Text>
                                </TouchableOpacity>
                    </View>
                </View>
                
            </KeyboardAvoidingView>
        
        </>
        )

}
