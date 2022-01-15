import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack'
import React, {useContext, useState} from 'react'
import { StyleSheet,SafeAreaView, View, Text,  ImageBackground, TouchableOpacity, Dimensions, TextInput, useWindowDimensions } from 'react-native'
import { Background } from '../components/Background'
import { AuthContext } from '../context/AuthContext'
import { RootStackParams } from '../screens/StackNavigator/StackNavigator'
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
  
