import { View, Alert } from 'react-native';

interface Props { 
    title: string;
    message : string;
    buttons : Array<{
      text    : string,
      onPress : () => void
    }>
}

export const useAlert = ({title, message , buttons} : Props) => {
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
      return{
        Alerta
      }
};
