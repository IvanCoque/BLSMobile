import React from 'react';
import { Text, View } from 'react-native';
import { Tratamiento } from '../interfaces/appInterfaces';
interface Props { 
    tratamiento : Tratamiento
}
export const AvancePoster = ({tratamiento} : Props) => {
    console.log()
  return(
      <View>
            <Text>AvancePoster</Text>
      </View>
  );
};
