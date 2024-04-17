// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {MobileListScreen} from './screens/MobileListScreen.js';
import {MobileDetailScreen} from './screens/MobileDetailScreen.js';
import { MobileListProvider } from './components/MobileListContext.js';

const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <MobileListProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="MobileListScreen">
          <Drawer.Screen name="MobileListScreen" component={MobileListScreen} />
          <Drawer.Screen name="MobileDetailScreen" component={MobileDetailScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </MobileListProvider>
  );
};

export default App;
