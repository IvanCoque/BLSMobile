import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../Navigation/SettingsScreen';

const Drawer = createDrawerNavigator();

function HomeNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );