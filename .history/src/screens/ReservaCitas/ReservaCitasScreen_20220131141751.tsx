import React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatListMenuItem } from '../../components/FlatListMenuItem';
import { MenuItem } from '../../interfaces/appInterfaces';
import { styles } from '../../theme/appTheme';

export const ReservaCitasScreen = () => {
  const menuItems: MenuItem[] = [
    {
        name : 'Animation 101',
        icon : 'ios-book',
        components : 'Animation101Screen'
    },
    {
        name : 'Animation 102',
        icon : 'calendar',
        components : 'Animation102Screen'
    }
  ]
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
                  marginTop : top+20,
                  marginBottom : 20
              }}>
                  <Text style = {styles.title}>
                      Reserva de Citas
                  </Text>
              </View>
          )
      }

      const itemSeparator = () =>{
          return(
              <View style= {{
                  borderBottomWidth : 1,
                  opacity: 0.4,
                  marginVertical : 8
              }}>

              </View>
          )
      }
    return (
      <SafeAreaView style = {styles.globalMargin}>
          <FlatList
              data={menuItems}
              renderItem = { ({item}) => renderMenuItem(item)}
              keyExtractor = { (item) => item.name}
              ListHeaderComponent = {renderListHeader}
              ItemSeparatorComponent={itemSeparator}
          />
        </SafeAreaView>
    );

};
