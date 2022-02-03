import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MenuItem } from '../interfaces/appInterfaces';

interface Props {
    menuItem : MenuItem
}

export const FlatListMenuItem = ({menuItem}:Props) => {
    if(menuItem.icon === 'Cabeza'){
        menuItem.icon = 'face';
    }
    return (
        <TouchableOpacity
            activeOpacity={0.6}

        >
            <View style = {styles.container}>
                <Icon
                    name = {menuItem.icon}
                    color='gray'
                    size = {30} 
                >

                </Icon>
                <Text style = {styles.itemText}>
                    {menuItem.name}
                </Text>
                <Icon
                    name = 'chevron-right'
                    color = 'gray'
                    size={30}
                >

                </Icon>
            </View>
        </TouchableOpacity>
    
    )
    
};

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        justifyContent : 'space-between',
    },
    itemText : {
        marginLeft : 5
    }
});    