import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CustomSwitch } from '../../components/CustomSwitch';
import { styles } from '../../theme/appTheme';
export const PerfilUsuario = () => {
    
    const {top} = useSafeAreaInsets();

    const onChange= (value : boolean, field : keyof state) => {
        setState({
            ...state, 
            [field]: value
        })
    }
    return( 
            <View style = {{
                ...styles.globalMargin,
                top : top+10,
            }}>
                <Text style = {styles.title}>Perfil de Usuario</Text>
                <CustomSwitch isOn={false} onChange={(value) => onChange(value, 'isActive')}/>
            </View>
        );
};
