
import React, { useContext, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { MobileListContext } from '../components/MobileListContext.js';
import axios from 'axios';

const MobileListScreen = ({navigation}) => {
  const { mobiles, setMobiles } = useContext(MobileListContext);

  useEffect(() => {
    axios
      .get('https://my-json-server.typicode.com/kaloa2025/mobile/mobiles')
      .then((response) => {
        console.log("got mobiles");
        setMobiles(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);
  
  return (
    <View style={styles.container}>
      {mobiles.map((mobile) => ( // Changed from techBooks to mobiles
        <View key={mobile.brand} style={styles.brand}>
          <Text style={styles.brand}>{mobile.brand}</Text>
          <Text style={styles.model}>{mobile.model}</Text>
          <Button
            title="View Details"
            onPress={() =>
              navigation.navigate( "MobileDetailScreen", { mobile }) // Changed from { mobiles } to { mobile }
            }
          />
        </View>
      ))}
    </View>
  );
};
export {MobileListScreen};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brand: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '80%',
  },
  model: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
