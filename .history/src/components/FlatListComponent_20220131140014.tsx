import React from 'react';
import { FlatList, Text, View } from 'react-native';

interface MenuItem {
    name : string;
    icon : string;
    components : string;
}
const menuItems = [
    {
        name : 'Animation 101',
        icon : 'ios-book',
        components : 'Animation101Screen'
    }
]
export const FlatListComponent = () => {
    const renderMenuItem = (menuItem : MenuItem) => {
        return (
            <View>
                <Text>
                    {menuItem.name}
                </Text>
            </View>
        )
    }
    const renderListHeader = () =>{
        return (
            <View>
                <Text>
                    Opciones de menu
                </Text>
            </View>
        )
    }

  return (
    <View>
        
        <FlatList
            data={menuItems}
            renderItem = { ({item}) => renderMenuItem(item)}
            keyExtractor = { (item) => item.name}
        />
    </View>
  );
};
