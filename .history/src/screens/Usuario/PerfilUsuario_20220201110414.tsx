import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../../theme/appTheme';
const {top} = useSafeAreaInsets();
export const PerfilUsuario = () => {
  return( 
        <View style = {styles.globalMargin}>
            <Text style = {styles.title}>PerfilUsuario</Text>
        </View>
    );
};
