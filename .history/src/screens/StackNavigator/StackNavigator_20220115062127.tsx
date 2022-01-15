import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {LoginScreen} from '../../Authentication/LoginScreen';
import { RegisterScreen } from '../../Authentication/RegisterScreen';

/*
import {PrimeraScreen} from '../Navigation/PrimeraScreen';
import {SegundaScreen} from '../Navigation/SegundaScreen';
import {TerceraScreen} from '../Navigation/TerceraScreen';
*/
 export type RootStackParams = {
     LoginScreen: undefined,
     RegisterScreen: undefined
 }
 const RootStack = createNativeStackNavigator<RootStackParams>();
export const StackNavigator = () => {


    return(
        <RootStack.Navigator
            initialRouteName="LoginScreen"
            
        >
            <RootStack.Screen name="LoginScreen" options={{title:"Login"}} component={LoginScreen} />
            <RootStack.Screen name="RegisterScreen" options={{title:"Registro"}} component={RegisterScreen} />
            <RootStack.Screen name="RegisterScreen" options={{title:"Registro"}} component={RegisterScreen} />
       
        </RootStack.Navigator>

    )
}