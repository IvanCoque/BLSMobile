import React from 'react';
import { View } from 'react-native';

export const CustomSwitch = () => {
  return (
    <Switch 
    trackColor = {{false: '#D9D9DB', true: '#0a7558'}}
    thumbColor = {isEnabled ? '#f4f3f4' : '#f4f3f4'}
    //ios_backgroundColor = '#3e3e3e'
    onValueChange = {toggleSwitch}
    value = {isEnabled}
/>
  );
};
