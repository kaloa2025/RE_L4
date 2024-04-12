import React, { useContext, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { MobileListContext } from '../components/MobileListContext.js';
import axios from 'axios';

export const MobileListScreen = ({ navigation }) => {
  const { mobiles, setMobiles } = useContext(MobileListContext);

  useEffect(() => {
    axios
      .get('https://my-json-server.typicode.com/kaloa2025/mobile/mobiles')
      .then((response) => {
        setMobiles(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      {techBooks.map((mobile) => (
        <View key={mobile.brand} style={styles.brand}>
          <Text style={styles.model}>{mobile.model}</Text>
          <Button
            title="View Details"
            onPress={() =>
              navigation.navigate('MobileDetailScreen', { mobiles })
            }
          />
        </View>
      ))}
    </View>
  );
};

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
