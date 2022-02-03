import React, { useState } from 'react';
import { Switch, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CustomSwitch } from '../../components/CustomSwitch';
import { styles } from '../../theme/appTheme';
import { CustomAlert } from '../../components/CustomAlert';
export const PerfilUsuario = () => {
    
    const {top} = useSafeAreaInsets();
    const [state, setState] = useState({
        isActive : true, 
        isHungry : false,
        isHappy : true
    })

    const {isActive, isHungry, isHappy} = state;

    const onChange= (value : boolean, field : string) => {
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
                <Text > {JSON.stringify(state, null, 5)}</Text>
                <TextIn
                <CustomAlert
                    alertTitle = "Alerta"
                    message = "Esta es una alerta"
                    buttons = {[
                        {
                            text: 'Cancelar',
                            onPress: () => console.log('Cancel Pressed'),
                        
                        },
                        { text: 'OK', onPress: () => console.log('OK Pressed') }
                    ]}
                    buttonText = "Aceptare"
                />  
                  
            </View>
            
            
        );
};
