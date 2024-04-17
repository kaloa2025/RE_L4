import { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';
import MobileDetail from './MobileDetail';

export class MonbileList extends Component {
  state = {
    mobiles: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get('https://my-json-server.typicode.com/kaloa2025/mobile/mobiles')
      .then((res) => {
        this.setState({ mobiles: res.data, loading: false });
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { mobiles, loading } = this.state;

    if (loading) {
      return (
        <View style={styles.container}>
          <Text>Loading..</Text>
        </View>
      );
    }

    return (
      <ScrollView style={styles.container}>
        {mobiles.map((mobile, index) => (
          <View key={index} style={styles.mobilesContainer}>
            <MobileDetail
              brand={mobile.brand}
              model={mobile.model}
              urll={mobile.url}
              image={mobile.image}
            />
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mobilesContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
  },
});
