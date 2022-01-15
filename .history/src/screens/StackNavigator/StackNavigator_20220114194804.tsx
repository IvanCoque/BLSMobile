import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const RootStack = createNativeStackNavigator();
/*
import {PrimeraScreen} from '../Navigation/PrimeraScreen';
import {SegundaScreen} from '../Navigation/SegundaScreen';
import {TerceraScreen} from '../Navigation/TerceraScreen';
*/

export const StackNavigator = () => {


    return(
        <RootStack.Navigator
            initialRouteName="PrimeraScreen"
            
        >
            <RootStack.Screen name="PrimeraScreen" options={{title:"Home"}} component={PrimeraScreen} />
            <RootStack.Screen name="SegundaScreen" options={{title:"Usuarios"}} component={SegundaScreen} />
            <RootStack.Screen name="TerceraScreen" options={{title:"Historias Clinicas"}} component={TerceraScreen} />
        </RootStack.Navigator>

    )
}