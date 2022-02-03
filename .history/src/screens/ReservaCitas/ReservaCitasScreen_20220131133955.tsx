import React from 'react';
import { Text, View } from 'react-native';
import { FlatListComponent } from '../../components/FlatListComponent';

export const ReservaCitasScreen = () => {
  return (
        <View>
            <Text style = {styles.}>Opciones de Menú</Text>
            <FlatListComponent/>
        </View>
    
  );
};
