import React, { useEffect, useState } from 'react';
import { Alert, FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Agenda } from 'react-native-calendars';
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

                <Agenda
                    items={{ 
                        "2022-01-24": [{'appointment 1 data'}],
                        "2022-01-24": [{'appointment 2 data'}],
                        "2022-01-28": [{'some other appointment data}],
                      }}
                    // Initially selected day
                    selected={date}
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    minDate={today}
                    // Specify how each item should be rendered in agenda
                    renderItem={(item, firstItemInDay) => {
                        return <View>
                            <PlanningCard
                            style={styles.appointmentCard}
                            hour={String(moment.unix(item.date).format("H[h]mm"))}
                            ></PlanningCard>
                        </View>;
                    }}
                />
        </SafeAreaView>
    )
}
