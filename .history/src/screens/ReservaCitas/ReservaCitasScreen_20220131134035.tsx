import React from 'react';
import { Text, View } from 'react-native';
import { FlatListComponent } from '../../components/FlatListComponent';
import { styles } from '../../theme/appTheme';

export const ReservaCitasScreen = () => {
  return (
        <SafeAreaView>
            <Text style = {styles.title}>Opciones de Menú</Text>
            <FlatListComponent/>
        </SafeAreaView>
    
  );
};
