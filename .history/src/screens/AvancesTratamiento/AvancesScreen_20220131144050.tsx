import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { styles } from '../../theme/appTheme';

export const AvancesScreen = () => {
    const menuItems: MenuItem[] = [
        {
            name : 'Animation 101',
            icon : 'book-online',
            components : 'Animation101Screen'
        },
        {
            name : 'Animation 102',
            icon : 'calendar-today',
            components : 'Animation102Screen'
        }
      ]
        const {top} = useSafeAreaInsets();
    
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
                  renderItem = { ({item}) => <FlatListMenuItem menuItem = {item}/>}
                  keyExtractor = { (item) => item.name}
                  ListHeaderComponent = {renderListHeader}
                  ItemSeparatorComponent={itemSeparator}
              />
            </SafeAreaView>
        );
};
