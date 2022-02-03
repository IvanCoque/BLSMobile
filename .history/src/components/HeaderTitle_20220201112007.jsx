import React from 'react';
import { styles } from '../theme/appTheme';

export const HeaderTitle = () => {
  return(
    <View style = {{
        marginTop : top+20,
        marginBottom : 20
    }}>
        <Text style = {styles}>
            Reserva de Citas
        </Text>
    </View>
  );
};
