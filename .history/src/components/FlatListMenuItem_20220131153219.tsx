import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MenuItem } from '../interfaces/appInterfaces';
import useNavigation from '../hooks/useNavigation';
interface Props {
    menuItem : MenuItem
}

export const FlatListMenuItem = ({menuItem}:Props) => {
    //ICONS EN BASE A LA PARTE DEL CUERPO SELECCIONADO
    if(menuItem.icon === 'Cabeza'){
        menuItem.icon = 'face-retouching-natural';
    }
    
    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress = { () =>{
                
            }}
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