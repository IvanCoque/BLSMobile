import React from 'react';
import { Text, View } from 'react-native';
import { Tratamiento } from '../interfaces/appInterfaces';
interface Props { 
    tratamiento : Tratamiento
    children : 
}
export const AvancePoster = ({tratamiento} : Props) => {
    console.log(tratamiento);
  return(
      <View>
            <Text>AvancePoster</Text>
      </View>

  );
};
