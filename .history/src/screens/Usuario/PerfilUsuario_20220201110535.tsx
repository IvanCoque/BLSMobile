import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../../theme/appTheme';
export const PerfilUsuario = () => {
  return( 
        <View style = {{
            ...styles.globalMargin,
            top : top+10,
        }}>
            <Text style = {styles.title}>PerfilUsuario</Text>
        </View>
    );
};
