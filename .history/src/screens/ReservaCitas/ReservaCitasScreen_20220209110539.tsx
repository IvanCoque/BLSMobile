import React, { useEffect, useState } from 'react';
import { Alert, FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
//import { Agenda, AgendaSchedule, Calendar, DateData } from 'react-native-calendars';
//import { Avatar, Card } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../../theme/appTheme';
//import { Scheduler } from "@aldabil/react-scheduler";

export const ReservaCitasScreen = () => {
    const {top} = useSafeAreaInsets();

    return (
      <SafeAreaView style = {styles.globalMargin}>
           {/* <FlatList
              data={menuItems}
              renderItem = { ({item}) => <FlatListMenuItem menuItem = {item}/>}
              keyExtractor = { (item) => item.name}
              ListHeaderComponent = {renderListHeader}
              ItemSeparatorComponent={itemSeparator}
          />  */}
          <View style = {{
                  marginTop : top+20,
                  marginBottom : 20
              }}>
                  <Text style = {styles.title}>
                      Reserva de Citas
                  </Text>
              </View>
        </SafeAreaView>
    )
}
