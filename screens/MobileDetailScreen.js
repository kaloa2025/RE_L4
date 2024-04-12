import React from 'react';
import { View, Text } from 'react-native';

export const MobileDetailScreen = ({ route }) => {
  const { mobiles } = route.params;

  return (
    <View>
      <Text>Brand: {mobiles.brand}</Text>
      <Text>Model: {mobiles.model}</Text>
    </View>
  );
};
