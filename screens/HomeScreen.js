import React from 'react';
import { Image, View, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-elements'

export default class MenuScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View styles={styles.container}>
      <Card
        title='Welcome back!'>
        <Text style={{ textAlign: 'center' }}>
          How was your day?
        </Text>
        <Text style={{ textAlign: 'center' }}>
          I cannot wait to hear all about it!
        </Text>
        <Text style={{ textAlign: 'center' }}>
          Spare no detail.
        </Text>
      </Card>
      <Card
        title='The day before'>
        <Text style={{ textAlign: 'center' }}>
          You felt stressed yesterday.
        </Text>
        <Text style={{ textAlign: 'center' }}>
          I hope today was a step above!
        </Text>
        <Text style={{ textAlign: 'center' }}>
          Open the calendar for an overview.
        </Text>
      </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2980b9',
    padding: 20,
  },
});
