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
    SUBJECT SCREENS
*/
import {PublicHomeScreen} from '../screens/Home/PublicHomeScreen';
    // START SUBJECTS
        // START LANGUAGE 
            import {LanguageScreen} from '../screens/PublicGames/Language/LanguageScreen'
        // END LANGUAGE 
        
        //START MATH
        // END MATH

        // START NATURAL SCIENCE 
        // END NATURAL SCIENCE 

        // START SOCIAL STUDIES 
        // END SOCIAL STUDIES 
    // END SUBJECTS 
// FIN SUBJECT SCREENS 
 export type RootStackParams = {
     MainScreen : undefined,
     LoginScreen: undefined,
     RegisterScreen: undefined,
     ProtectedScreen : undefined,
     StudentScreen : undefined,
     PublicScreen : undefined,
     PublicHomeScreen : undefined,
     LanguageScreen : undefined
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
                        {/* PANTALLAS ALUMNOS          */}
                            <RootStack.Screen name="PublicHomeScreen" options= {{title : "Public Main Menu"}} component ={PublicHomeScreen}/>  
                            {/* LENGUAJE  */}
                                <RootStack.Screen name="LanguageScreen" options= {{title : "Public Alumno"}} component ={LanguageScreen}/>  
                            {/* FIN LENGUAJE  */}
                        {/* FIN PANTALLAS ALUMNOS  */}
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