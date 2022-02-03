import React, { useState } from 'react';
import { Switch, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../../theme/appTheme';
export const PerfilUsuario = () => {
    
    const {top} = useSafeAreaInsets();
    const [isEnabled, setIsEnabled= useState(false);

    const toggleSwitch = () => setIsEnabled(!isEnabled);

    return( 
            <View style = {{
                ...styles.globalMargin,
                top : top+10,
            }}>
                <Text style = {styles.title}>PerfilUsuario</Text>
                <Switch 
                    trackColor = {{false: '#767577', true: '#81b0ff'}}
                    thumbColor = {isEnabled ? '#f4f3f4' : '#f4f3f4'}
                    ios_backgroundColor = '#3e3e3e'
                    onValueChange = {toggleSwitch}
                    value = {isEnabled}
                />
            </View>
        );
};
