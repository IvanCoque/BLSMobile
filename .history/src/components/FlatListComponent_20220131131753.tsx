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
    const renderMenuItem = () => {
        return (
            <View>
                <Text>
                    {menuItem}
                </Text>
            </View>
        )
    }

  return (
    <View>
        <FlatList
            data={menuItems}
            renderItem = { () =>{
                return (
                    <Text>1</Text>
                )
            }}
            keyExtractor = { ({item}:any) => item.id}
        />
    </View>
  );
};
