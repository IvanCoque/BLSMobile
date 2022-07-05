import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {LoginScreen} from '../Authentication/LoginScreen';
import { RegisterScreen } from '../Authentication/RegisterScreen';
import { MainScreen } from '../Authentication/MainScreen';
import { ProtectedScreen } from '../Authentication/ProtectedScreen';
import { AuthContext } from '../context/AuthContext';
import { LoadingScreen } from '../screens/Navigation/LoadingScreen';
import { StudentScreen } from '../Authentication/StudentScreen';
import { PublicScreen } from '../Authentication/PublicScreen';
/*
import {PrimeraScreen} from '../Navigation/PrimeraScreen';
import {SegundaScreen} from '../Navigation/SegundaScreen';
import {TerceraScreen} from '../Navigation/TerceraScreen';
*/
 export type RootStackParams = {
     MainScreen : undefined,
     LoginScreen: undefined,
     RegisterScreen: undefined,
     ProtectedScreen : undefined,
     StudentScreen : undefined,
     PublicScreen : undefined
 }
 const RootStack = createNativeStackNavigator<RootStackParams>();
export const StackNavigator = () => {
    const {status} = useContext(AuthContext)
    
    if(status === 'checking') return <LoadingScreen/>

    return(
        <RootStack.Navigator
            screenOptions={{
                headerShown : false,
                headerStyle:{
                    backgroundColor: 'white'
                },
                contentStyle :{
                    backgroundColor: 'white'
                }
            }}

            initialRouteName="MainScreen"
            
        >
            {
                status !== 'authenticated'
                    ?
                (
                    <>
                        <RootStack.Screen name="MainScreen" options={{title:"Screen Principal"}} component={MainScreen}/>
                        <RootStack.Screen name="LoginScreen" options={{title:"Login"}} component={LoginScreen} />
                        <RootStack.Screen name="RegisterScreen" options={{title:"Registro"}} component={RegisterScreen} /> 
                        <RootStack.Screen name="StudentScreen" options= {{title : "Home Alumno"}} component ={StudentScreen}/>  
                        <RootStack.Screen name="PublicScreen" options= {{title : "Public Alumno"}} component ={PublicScreen}/>           
                    </>
                )
                    :
                (
                        <>
                            <RootStack.Screen name="ProtectedScreen" options={{title:"Protected"}} component={ProtectedScreen} />
       
                        </>
                       
                )
            }
          
        </RootStack.Navigator>

    )
}