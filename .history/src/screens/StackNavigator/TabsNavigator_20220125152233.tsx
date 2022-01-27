import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Estadisticas } from '../Estadisticas/Estadisticas';
import { ReservaCitasScreen } from '../ReservaCitas/ReservaCitasScreen';
import { PerfilUsuario } from '../Usuario/PerfilUsuario';

const Tab = createBottomTabNavigator();

export const TabsNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: '#e91e63',
            tabBarStyle: { 
                borderTopColor: '#e91e63',
                styl
            },
        }}
    >
      <Tab.Screen name="Reserva de Citas" component={ReservaCitasScreen} />
      <Tab.Screen name="Estadisticas" component={Estadisticas} />
      <Tab.Screen name="Perfil Usuario" component={PerfilUsuario} />
    </Tab.Navigator>
  );
}