import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {LoginScreen} from '../../Authentication/LoginScreen';
import { SignupScreen } from '../../Authentication/SignupScreen';
const RootStack = createNativeStackNavigator();
/*
import {PrimeraScreen} from '../Navigation/PrimeraScreen';
import {SegundaScreen} from '../Navigation/SegundaScreen';
import {TerceraScreen} from '../Navigation/TerceraScreen';
*/
 export type RootStackParams = {
     LoginScreen:
 }
export const StackNavigator = () => {


    return(
        <RootStack.Navigator
            initialRouteName="LoginScreen"
            
        >
            <RootStack.Screen name="LoginScreen" options={{title:"Login"}} component={LoginScreen} />
            <RootStack.Screen name="SignupScreen" options={{title:"Registro"}} component={SignupScreen} />
        </RootStack.Navigator>

    )
}