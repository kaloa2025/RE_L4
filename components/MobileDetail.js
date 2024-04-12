import { Button } from 'react-native';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';

export const MobileDetail = ({ brand, model, url, image }) => {
  const openBrowser = () => {
    Linking.openURL(url).catch((err) =>
      console.error('An error occurred', err)
    );
  };

  return (
    <View style={styles.card}>
      <Image source={{ url: image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.brand}>Brand: {brand}</Text>
        <Text style={styles.model}>Model: {model}</Text>
        <Button title="Read More" onPress={openBrowser} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: 80,
    height: 100,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  brand: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  model: {
    fontSize: 14,
    color: '#555',
    marginBottom: 3,
  },
});
