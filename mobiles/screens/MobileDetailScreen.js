import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MobileDetailScreen = ({ route }) => {
  const {mobile} = route.params;

  return (
    <View>
      <Text>Brand: {mobile.brand}</Text>
      <Image source={{ uri: mobile.image }} style={styles.image}/>
      <Text>Model: {mobile.model}</Text>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});
export {MobileDetailScreen};