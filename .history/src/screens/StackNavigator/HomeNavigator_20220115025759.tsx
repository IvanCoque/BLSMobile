import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function HomeNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Settings" component={Feed} />
    </Drawer.Navigator>
  );