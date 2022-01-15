import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import React, {useContext, useState} from 'react'
import { StyleSheet,SafeAreaView, View, Text,  ImageBackground, TouchableOpacity, Dimensions, TextInput, useWindowDimensions, Platform } from 'react-native'
import { Background } from '../components/Background'
import { Logo } from '../components/Logo'
import { AuthContext } from '../context/AuthContext'
import { RootStackParams } from '../screens/StackNavigator/StackNavigator'
import { loginStyles } from '../theme/loginTheme'
//interface props extends NativeStackScreenProps<RootStackParams,'LoginScreen'>{};
export const LoginScreen = () => {
    const [nombreUsuario, onChangeNombreUsuario] = useState("")
    const [contrasenia, onChangeContrasenia] = useState("")
    const {width,height} = useWindowDimensions();
    const navigation = useNavigation<NativeStackNavigationProp<any,any>>();
   
    const {signIn} = useContext(AuthContext);

    return (
            <>
                {/*BACKGROUND */}
                <Background/>
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
                    //TODO onchange, value
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
                    //TODO onchange, value
                            
                />

                {/*Button Login */}
                <View 
                    style = {loginStyles.buttonContainer}
                >
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style = {loginStyles.button}
                    >
                        <Text 
                        >Login</Text>
                    </TouchableOpacity>
                </View>
            </>
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
  
