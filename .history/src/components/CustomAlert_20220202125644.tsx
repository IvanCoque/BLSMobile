import React from 'react';
import { View, Alert } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props { 
    title: string;
    message : string;
    buttons : Array<{
      text    : string,
      onPress : () => void
    }>
}

export const AlertComponent = ({title, message , buttons} : Props) => {
  const Alerta = ()=>{
    Alert.alert(
      title,
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
            onPress = {()=>{alertas()}}
        >   
        <Text style={styles.ButtonSuccess}>
            Aceptar
        </Text>
    
    </TouchableOpacity>
      )
};
