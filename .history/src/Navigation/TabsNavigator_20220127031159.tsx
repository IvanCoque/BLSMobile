import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Estadisticas } from '../screens/Estadisticas/Estadisticas';
import { ReservaCitasScreen } from '../screens/ReservaCitas/ReservaCitasScreen';
import { PerfilUsuario } from '../screens/Usuario/PerfilUsuario';
import { colores } from '../theme/appTheme';
import { Platform, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';


export const TabsNavigator = () =>{
    return Platform.OS === 'ios' 
        ? <TabsIOSNavigator/>
        : <TabsAndroidNavigator/>
}


const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroidNavigator = () => {
return (
    <BottomTabAndroid.Navigator
        sceneAnimationEnabled ={true}
        barStyle = {{
            backgroundColor: colores.primary
        }}

        screenOptions={({route}) =>({
            tabBarIcon: ({focused, color}) => {
                console.log(route.name)
                let iconName : string =""; 
                switch(route.name){
                    case 'Reserva de Citas':
                        iconName = 'event-note';
                    break
                    case 'Estadisticas':
                        iconName = 'pie-chart';
                    break
                    case 'Perfil Usuario':
                        iconName = 'account-box';
                    break

                }
                return <Text><Icon name={iconName} size={22} color={color} /></Text>;
            }
        }) }
    >
        <BottomTabAndroid.Screen name="Reserva de Citas" component={ReservaCitasScreen}  />
        <BottomTabAndroid.Screen name="Estadisticas" component={Estadisticas} />
        <BottomTabAndroid.Screen name="Perfil Usuario" component={PerfilUsuario} />
        <Bottom
     </BottomTabAndroid.Navigator>
);
}



//IOS
const BottomTabIOS = createBottomTabNavigator();

const TabsIOSNavigator = () => {
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
      <BottomTabIOS.Screen name="Perfil Usuario" component={PerfilUsuario} />
    </BottomTabIOS.Navigator>
  );
}