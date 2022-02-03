import React, { useState } from 'react';
import { Switch, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AlertComponent } from '../../components/AlertComponent';
import { CustomSwitch } from '../../components/CustomSwitch';
import { styles } from '../../theme/appTheme';
export const PerfilUsuario = () => {
    
    const {top} = useSafeAreaInsets();
    const [state, setState] = useState({
        isActive : true, 
        isHungry : false,
        isHappy : true
    })

    const {isActive, isHungry, isHappy} = state;
    const {alerta}:any = AlertComponent
    const onChange= (value : boolean, field : string) => {
        setState({
            ...state, 
            [field]: value
        })
    }
    const alertas = () =>{
        alerta({
            message: 'Alerta',
            title: 'Alerta',

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
                    <TouchableOpacity
                        style={styles.menuButton}
                        onPress = {()=>{alerta()}}
                    >   
                        <Text style={styles.ButtonSuccess}>
                            Aceptar
                        </Text>
                    
                    </TouchableOpacity>
            </View>
            
            
        );
};
