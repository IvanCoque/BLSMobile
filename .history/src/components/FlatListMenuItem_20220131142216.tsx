import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { } from 'react-native-vector-icons/MaterialIcons';
import { MenuItem } from '../interfaces/appInterfaces';

interface Props {
    menuItem : MenuItem
}

export const FlatListMenuItem = ({menuItem}:Props) => {
    return (
        <View>
            <Text>{menuItem.name} - {menuItem.icon}</Text>
        </View>
    
    )
    
};

const styles = StyleSheet.create({
    container : {

    }
});    