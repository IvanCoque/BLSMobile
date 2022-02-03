import React, { useState } from 'react';
import { Switch } from 'react-native';

export const CustomSwitch = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(!isEnabled);

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
