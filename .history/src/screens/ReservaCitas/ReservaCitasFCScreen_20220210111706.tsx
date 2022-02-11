import {addDays, format} from 'date-fns';
import React, {useEffect, useRef, useState} from 'react';
import {Button, Dimensions, Modal, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Agenda} from 'react-native-calendars';
import { ReservaCita } from '../../interfaces/appInterfaces';
import dermatologiaApi from '../../api/dermatologiaApi';
import EventCalendar from 'react-native-events-calendar'
import { Fab } from '../../components/Fab';
let { width } = Dimensions.get('window')

type Hora = {
    start : string,
    end : string,
    title : string,
    summary: string
}
export const ReservaCitasFCScreen: React.FC = () => {
    //create ref to store the current visible date
    const calendarRef = useRef(null);
    useRef(new Date());
  const [items, setItems] = useState<{[key: string]: ReservaCita[]}>({});
  const [horas, setHoras] = useState<Hora[]>([]);
  const [selectedDay, setSelectedDay] = useState<string>('2022-02-09');
  const 
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
    };

    getData();
  }, []);

  const createReserva = () =>{
      return (
        <Modal
        animationType="slide"
        visible={isVisible}
        transparent
    >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>  
            <View style={{ 
                    backgroundColor: 'white',
                    width: '80%', 
                    height: '70%', 
                    borderRadius: 10, 
                    justifyContent : 'center', 
                    alignItems : "center" 
            }}>

                
                <Button
                    title="Cerrar modal"
                    onPress={() => setIsVisible(false)}
                />
            </View>
        </View>
    </Modal>
      )
  }


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
            onRef={calendarRef}
            eventTapped={(event:Hora) => {
                console.log(event);
            }}
            
            events={horas}
            width={width}
            />
      </View>
      <Fab position='right' title={"+"} onPress={createReserva}/>
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
