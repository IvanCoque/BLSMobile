import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, {useContext, useState} from 'react'
import { StyleSheet,SafeAreaView, View, Text,  ImageBackground, TouchableOpacity, Dimensions, TextInput, useWindowDimensions, Platform, KeyboardAvoidingView, Keyboard } from 'react-native'
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
        fecha_nacimiento : '',
        sexo : '',
        estado_civil: '',
        religion : '',
        ocupacion : '',
        lugar_nacimiento : '2018/10/22',
        residencia : '',
        domicilio : '',
        telefono : '',
        estado : '',
        imagen : '',
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
                <View style = {loginStyles.formContainer}>
                    {/* Keyboard avoid view*/}
                    <Logo/>
                    <Text style={loginStyles.title}>Login</Text>
                    
                    <Text style={loginStyles.label}>Nombres Completos</Text>
                    <TextInput
                        placeholder='Ingrese sus nombres'
                        placeholderTextColor = 'rgba(255,255,255,0.4)'
                        
                        underlineColorAndroid="white"
                        style = {[
                                    loginStyles.inputField,
                                    (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                                ]}
                        selectionColor='white'
                        onChangeText={ (value) => onChange(value, 'nombre')}
                        value = {nombre}  
                        onSubmitEditing={onRegister}
                        autoCorrect={false}
                    />
                    <Text style={loginStyles.label}>Cedula</Text>
                    <TextInput
                        placeholder='Ingrese su cédula'
                        placeholderTextColor = 'rgba(255,255,255,0.4)'
                        
                        underlineColorAndroid="white"
                        style = {[
                                    loginStyles.inputField,
                                    (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                                ]}
                        selectionColor='white'
                        onChangeText={ (value) => onChange(value, 'cedula')}
                        value = {password}  
                        onSubmitEditing={onRegister}
                        autoCorrect={false}
                    />
                    {/*FECHA NACIMIETNO */}
                    {/*SEXO*/}

                    <Text style={loginStyles.label}>Estado civil</Text>
                    <TextInput
                        placeholder='Ingrese su estado civil'
                        placeholderTextColor = 'rgba(255,255,255,0.4)'
                    
                        underlineColorAndroid="white"
                        style = {[
                                    loginStyles.inputField,
                                    (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                                ]}
                        selectionColor='white'
                        onChangeText={ (estado) => onChange(value, 'email')}
                        value = {email}  
                        onSubmitEditing={onRegister}
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
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
                        onSubmitEditing={onRegister}
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
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
                        onSubmitEditing={onRegister}
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
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
                        onSubmitEditing={onRegister}
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
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
                        onSubmitEditing={onRegister}
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
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
                        onSubmitEditing={onRegister}
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
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
                        onSubmitEditing={onRegister}
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
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
                        onSubmitEditing={onRegister}
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
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
                        onSubmitEditing={onRegister}
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
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
                        onSubmitEditing={onRegister}
                        autoCapitalize='none'
                        autoCorrect={false}
                    />
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
                        onSubmitEditing={onRegister}
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
                        onSubmitEditing={onRegister}  
                    />

                    {/*Button Login */}
                    <View 
                        style = {loginStyles.buttonContainer}
                    >
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style = {loginStyles.button}
                            onPress = {onRegister}
                        >
                            <Text style = {loginStyles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {loginStyles.newUserContainer}>
                                <TouchableOpacity
                                    activeOpacity={.8}
                                    onPress ={()=>{navigation.replace('LoginScreen')}}
                                >
                                    <Text style = {loginStyles.buttonText}>¿Ya tienes una cuenta?</Text>
                                </TouchableOpacity>
                    </View>
                </View>
                
            </KeyboardAvoidingView>
        
        </>
        )

}
