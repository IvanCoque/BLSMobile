import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Estadisticas } from '../Estadisticas/Estadisticas';
import { ReservaCitasScreen } from '../ReservaCitas/ReservaCitasScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={ReservaCitasScreen} />
      <Tab.Screen name="Settings" component={Estadisticas} />
    </Tab.Navigator>
  );
}