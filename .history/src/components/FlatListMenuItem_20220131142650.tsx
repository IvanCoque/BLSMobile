import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MenuItem } from '../interfaces/appInterfaces';

interface Props {
    menuItem : MenuItem
}

export const FlatListMenuItem = ({menuItem}:Props) => {
    return (
        <View style = {styles.container}>
            <Icon
                name = {menuItem.icon}
                color='gray'
                size = {30} 
            >

            </Icon>
            <Text style = {styles.itemText}>{menuItem.name}
            </Text>
        </View>
    
    )
    
};

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
    },
    itemText : {
        marginLeft : 5
    }
});    