import React from 'react';
import { Text, View } from 'react-native';
const menuItems = [
    {
        name : 'Animation 101',
        icon : 'ios-book',
        components : 'Animation101Screen'
    }
]
export const FlatList = () => {
  return (
    <View>
        <FlatList
            data={menuItems : any}
            renderItem = { () =>{
                return (
                    <Text>1</Text>
                )
            }}
        />
    </View>
  );
};
