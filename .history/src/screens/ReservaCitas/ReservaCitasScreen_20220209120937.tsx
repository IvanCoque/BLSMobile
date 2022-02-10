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
                        '2020-05-01': [{text: 'item 1 - any arbitrary data', date: '2020-05-01', time: '10:00'}, {text: 'item 2 - any arbitrary data', date: '2020-05-01', time: '12:00'}],
                      }}
                      loadItemsForMonth={(month) => {console.log('trigger items loading')}}
                    // Initially selected day
                    selected={'2020-05-01'}
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    minDate={'2020-05-01'}
                    // Specify how each item should be rendered in agenda
                    // renderItem={(item, firstItemInDay) => {
                    //     return <View>
                    //         <PlanningCard
                    //         style={styles.appointmentCard}
                    //         hour={String(moment.unix(item.date).format("H[h]mm"))}
                    //         ></PlanningCard>
                    //     </View>;
                    // }}
                    // Specify how each date should be rendered. day can be undefined if the item is not first in that day.
                    // renderDay={(day, item) => {
                    //     return <View style={styles.day}><Text>{day ? day.day: 'item'}</Text></View>;
                    // }}
                    // Specify how empty date content with no items should be rendered
                    // renderEmptyDate={() => {
                    //     return <View style={styles.day}><Text>Empty date</Text></View>;
                    // }}
                    // Specify how agenda knob should look like
                    // renderKnob={() => {
                    //     return <View style={styles.day}><Text>Knob</Text></View>;
                    // }}
                    // Specify what should be rendered instead of ActivityIndicator
                    // renderEmptyData={() => {
                    //     return <View style={styles.day}><Text>Empty date</Text></View>;
                    // }}
                    // Specify your item comparison function for increased performance
                    // rowHasChanged={(r1, r2) => {
                    //     return r1.text !== r2.text;
                    // }}
                    // By default, agenda dates are marked if they have at least one item, but you can override this if needed
                    // markedDates={{
                    //     '2020-05-16': {selected: true, marked: true},
                    //     '2020-05-17': {marked: true},
                    //     '2020-05-18': {disabled: true}
                    // }}
                    // If disabledByDefault={true} dates before minDate and after maxDate will be grayed out. Default = false
                    // disabledByDefault={true}
                    // Max amount of months allowed to scroll to the past. Default = 50
                    // pastScrollRange={50}
                    // Max amount of months allowed to scroll to the future. Default = 50
                    // futureScrollRange={50}
                    // Specify how each item should be rendered in agenda
                     renderItem={(item, firstItemInDay) => {
                         return <View>
                             <PlanningCard
                             style={styles.appointmentCard}
                             hour={String(moment.unix(item.date).format("H[h]mm"))}
                             ></PlanningCard>
                         </View>;
                     }}
                    // Specify how each date should be rendered. day can be undefined if the item is not first in that day.
                     renderDay={(day, item) => {
                         return <View style={styles.day}><Text>{day ? day.day: 'item'}</Text></View>;
                     }}


                />
        </SafeAreaView>
    )
}
