import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
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
    const {top} = useSafeAreaInsets();

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
            <View style = {{
                marginTop : top+20
            }}>
                <Text style = {styles.title}>
                    Reserva de Citas
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
            ListHeaderComponent = {renderListHeader}
            ItemSeparatorComponent={() => <Text?}
        />
    </View>
  );
};
