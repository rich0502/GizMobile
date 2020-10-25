import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Cuma from './cuma';
import Notification from './Notification';
import HomeScreen from '../pages/HomeScreen';

const Drawer = createDrawerNavigator();

export default function Menu() {
  return (
      <Drawer.Navigator initialRouteName="Home"  >
        <Drawer.Screen name="Accueil" component={Home} />
        <Drawer.Screen name="Bénéficiaire" component={Cuma} />
        <Drawer.Screen name="Mise à jours offline" component={HomeScreen} />
        <Drawer.Screen name="Notification" component={Notification} />
      </Drawer.Navigator>
  );
}


