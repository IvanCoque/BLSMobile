import React from 'react';
import { View, Alert, TouchableOpacity, Text } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props { 
    title: string;
    message : string;
    buttons : Array<{
      text    : string,
      onPress : () => void
    }>
}

export const CustomAlert = ({AlertTitle, message , buttons} : Props) => {
    console.log('entra')
    const Alerta = ()=>{
        Alert.alert(
        Atitle,
        message,
        buttons
        /*
        [
            {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
        ]
        */
     
    )};
      return(
        <TouchableOpacity
            style={styles.menuButton}
            onPress = {Alerta}
        >   
        <Text style={styles.ButtonSuccess}>
            Aceptar
        </Text>
    
    </TouchableOpacity>
      )
};
