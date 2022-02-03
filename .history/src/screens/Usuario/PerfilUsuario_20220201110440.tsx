import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../../theme/appTheme';
const {top} = useSafeAreaInsets();
export const PerfilUsuario = () => {
  return( 
        <View style = {{
            ...styles.globalMargin,
            top : 
        }}>
            <Text style = {styles.title}>PerfilUsuario</Text>
        </View>
    );
};
