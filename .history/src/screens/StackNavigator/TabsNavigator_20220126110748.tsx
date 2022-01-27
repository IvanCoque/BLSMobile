import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Estadisticas } from '../Estadisticas/Estadisticas';
import { ReservaCitasScreen } from '../ReservaCitas/ReservaCitasScreen';
import { PerfilUsuario } from '../Usuario/PerfilUsuario';
import { colores } from '../../theme/appTheme';
import { Text, View } from 'react-native';

export const Tabs = 


const TabIOS = createBottomTabNavigator();

export const TabsNavigator = () => {
  return (
    <TabIOS.Navigator
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
      <TabIOS.Screen name="Reserva de Citas" component={ReservaCitasScreen}  />
      <TabIOS.Screen name="Estadisticas" component={Estadisticas} />
      <TabIOS.Screen name="Perfil Usuario" component={PerfilUsuario} />
    </TabIOS.Navigator>
  );
}