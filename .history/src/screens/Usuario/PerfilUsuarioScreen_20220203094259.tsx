import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
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

    const [inputState, setInputState] = useState({
        name : '',
        email : '',
        phone : '',
    })

    const onChange= (value : boolean, field : string) => {
        setState({
            ...state, 
            [field]: value
        })
    }
    const onInputChange = (value : string , field : string) => {
        setState({
            ...state, 
            [field]: value
        })
    }
    return( 
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <ScrollView>

            </ScrollView>
            
        </KeyboardAvoidingView>
            
            
            
        );
};
