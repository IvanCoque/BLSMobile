import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { FlatListComponent } from '../../components/FlatListComponent';
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
      <View>
          
          <FlatList
              data={menuItems}
              renderItem = { ({item}) => renderMenuItem(item)}
              keyExtractor = { (item) => item.name}
              ListHeaderComponent = {renderListHeader}
              ItemSeparatorComponent={itemSeparator}
          />
        </SafeAreaView>
    );

  return (
        <SafeAreaView style = {styles.globalMargin}>
           <FlatListComponent/>
    
  );
};
