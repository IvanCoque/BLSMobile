import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Estadisticas } from '../Estadisticas/Estadisticas';
import { ReservaCitasScreen } from '../ReservaCitas/ReservaCitasScreen';
import { PerfilUsuario } from '../Usuario/PerfilUsuario';
import { colores } from '../../theme/appTheme';
import { Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


export const Tabs = () =>{
    return Platform.OS === 'ios' 
        ? <TabsIOS/>
        ? <TabsAndroid/>
}


const TabsAndroid = createMaterialBottomTabNavigator();

const TabsAndroidNavigator = () => {
return (
    <TabsAndroid.Navigator>
    <TabsAndroid.Screen name="Home" component={HomeScreen} />
    <TabsAndroid.Screen name="Settings" component={SettingsScreen} />
    </TabsAndroid.Navigator>
);
}



//IOS
const BottomTabIOS = createBottomTabNavigator();

export const TabsNavigator = () => {
  return (
    <BottomTabIOS.Navigator
        sceneContainerStyle = {{
            backgroundColor: colores.background
        }}
        screenOptions={({route}) =>({
            tabBarIcon: ({focused, color, size}) => {
                console.log(route.name)
                let iconName : string =""; 
                switch(route.name){
                    case 'Reserva de Citas':
                        iconName = 'T1';
                    break
                    case 'Estadisticas':
                        iconName = 'T2';
                    break
                    case 'Perfil Usuario':
                        iconName = 'T3';
                    break

                }
                return <Text style={{color}}>{iconName}</Text>
            }
        }) }
    >
      <BottomTabIOS.Screen name="Reserva de Citas" component={ReservaCitasScreen}  />
      <BottomTabIOS.Screen name="Estadisticas" component={Estadisticas} />
      <IOS.Screen name="Perfil Usuario" component={PerfilUsuario} />
    </TabsIOS.Navigator>
  );
}