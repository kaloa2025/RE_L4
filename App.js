import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MobileListScreen from './screens/MobileListScreen.js';
import MobileDetailScreen from './screens/MobileDetailScreen.js';
import { MobileListProvider } from './components/MobileListContext.js';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <MobileListProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="MobileListScreen">
          <Drawer.Screen name="ListScreen" component={MobileListScreen} />
          <Drawer.Screen name="DetailScreen" component={MobileDetailScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </MobileListProvider>
  );
};

export default App;