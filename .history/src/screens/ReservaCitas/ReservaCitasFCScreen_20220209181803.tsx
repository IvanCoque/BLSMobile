import {addDays, format} from 'date-fns';
import React, {useEffect, useState} from 'react';
import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Agenda} from 'react-native-calendars';
import { ReservaCita } from '../../interfaces/appInterfaces';
import dermatologiaApi from '../../api/dermatologiaApi';
import EventCalendar from 'react-native-events-calendar'
import { Fab } from '../../components/Fab';
let { width } = Dimensions.get('window')
/*
type Item = {
  name: string;
  cookies: boolean;
};
*/
// type Post = {
//   id: number;
//   title: string;
//   body: string;
//   userId: number;
// };

type Hora = {
    start : string,
    end : string,
    title : string,
    summary: string
}
export const ReservaCitasFCScreen: React.FC = () => {
    useRef
  const [items, setItems] = useState<{[key: string]: ReservaCita[]}>({});
  const [horas, setHoras] = useState<Hora[]>([]);
  const [selectedDay, setSelectedDay] = useState<string>('2022-02-09');
  useEffect(() => {
    // run once

    const getData = async () => {
    //   const response = await fetch(
    //     'https://jsonplaceholder.typicode.com/posts',
    //   );
        const response = await dermatologiaApi.get('/reservasCitas/');
        const data: ReservaCita[] = await response.data;
        console.log('data desde reserva cita fc')
        console.log(data);
        const mappedData = data.map((reserva, index) => {
            //const date = addDays(new Date(), index);
            console.log('post desde map ----------')
            console.log(reserva);
            return {
            ...reserva,
            date: format(new Date(reserva.fecha_hora_inicio_reserva), 'yyyy-MM-dd'),
            };
        });

        const reduced = mappedData.reduce(
            (acc: {[key: string]: ReservaCita[]}, currentItem) => {
            const {date, ...coolItem} = currentItem;

            acc[date] = [coolItem];

            return acc;
            },
            {},
        );

        setItems(reduced);
        
        const mapHoras = () =>{
            //const horas: {[key: string]: ReservaCita[]} = {};
            const horitas = data.map((reserva, index) => {
                return ({
                    start :new Date(reserva.fecha_hora_inicio_reserva).toUTCString(),
                    end : new Date(reserva.fecha_hora_fin_reserva).toUTCString(),
                    title : reserva.motivo_reserva,
                    summary : reserva.id_usuario.nombre
                })
                // setHoras({...horas, start : reserva.fecha_hora_inicio_reserva, end : reserva.fecha_hora_fin_reserva, title : reserva.motivo_reserva, summary : reserva.id_usuario.nombre})
            });
            console.log('las horas de aksad')
            console.log(horitas);
            setHoras(horitas);
        }
        mapHoras();
        // const events = [
        //     { start: '2017-09-07 00:30:00', end: '2017-09-07 01:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        //     { start: '2017-09-07 01:30:00', end: '2017-09-07 02:20:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        //     { start: '2017-09-07 04:10:00', end: '2017-09-07 04:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        //     { start: '2017-09-07 01:05:00', end: '2017-09-07 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        //     { start: '2017-09-07 14:30:00', end: '2017-09-07 16:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        //     { start: '2017-09-08 01:20:00', end: '2017-09-08 02:20:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        //     { start: '2017-09-08 04:10:00', end: '2017-09-08 04:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        //     { start: '2017-09-08 00:45:00', end: '2017-09-08 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        //     { start: '2017-09-08 11:30:00', end: '2017-09-08 12:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        //     { start: '2017-09-09 01:30:00', end: '2017-09-09 02:00:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        //     { start: '2017-09-09 03:10:00', end: '2017-09-09 03:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
        //     { start: '2017-09-09 00:10:00', end: '2017-09-09 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' }
        // ]
    };

    getData();
  }, []);

  const renderItem = (item: ReservaCita) => {
      console.log('item desde render item')
        console.log(format(new Date(item.fecha_hora_inicio_reserva), 'yyyy-MM-dd'));
        setSelectedDay(format(new Date(item.fecha_hora_inicio_reserva), 'yyyy-MM-dd'));
      return (
      <View style={styles.itemContainer}>
        <Text>{item.motivo_reserva}</Text>
        <Text>Hora inicio de cita : {`${new Date(item.fecha_hora_inicio_reserva).getHours()}:${new Date(item.fecha_hora_inicio_reserva).getMinutes()}`}</Text>
        <Text>Hora final de cita : {`${new Date(item.fecha_hora_fin_reserva).getHours()}:${new Date(item.fecha_hora_fin_reserva).getMinutes()}`}</Text>
      </View>
    );
  };


  return (
    <SafeAreaView style={styles.safe}>
      <View style = {{flex: 3}}>
        <Agenda items={items} renderItem={renderItem} selectedDay={'2022-02-08'}/>
      
      </View>
      
      <View style ={{flex : 3}}>
        <EventCalendar
            onRef={ref => (calendar = ref)}
            //eventTapped={this._eventTapped.bind(this)}
            events={horas}
            width={width}
            initDate={selectedDay}
            />
      </View>
      <Fab position='right' title={"+"}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
