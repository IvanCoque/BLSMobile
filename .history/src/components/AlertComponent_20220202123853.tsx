import React from 'react';
import { View, Alert } from 'react-native';

interface Props { 
    title: string;
    message : string;
    buttons : Array<{
      text    : string,
      onPress : () => void
    }>
}

export const AlertComponent = ({title, message , buttons} : Props) => {
  useEffect(() => {
      
  }, [])  
  
  return ({

    });
};
