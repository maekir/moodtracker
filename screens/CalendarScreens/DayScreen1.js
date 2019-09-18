import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-elements'

export default class MenuScreen extends React.Component {
    static navigationOptions = {
        title: '13 Dec 2018'
    }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Card title="Mood">
          <View>
            <Text style={styles.stressed}>Stressed</Text>
            <Text style={{ marginTop: 10 }}>Notes:</Text>
            <Text style={{ fontStyle: 'italic'}}>Lots of work! Again! Should procrastinate less next time probably (nah no way lol)</Text>
          </View>
        </Card>
        <Card title="Sleep">
          <View>
            <Text style={{ fontStyle: 'italic'}}>0-4 hours</Text>
            <Text style={{ marginTop: 10 }}>Notes:</Text>
            <Text style={{ fontStyle: 'italic'}}>Serves me right for going to EatMore University instead of SleepMore University, huh</Text>
          </View>
        </Card>
        <Card title="Pain">
        <View>
            <Text style={{ fontStyle: 'italic'}}>General</Text>
            <Text style={{ marginTop: 10 }}>Notes:</Text>
            <Text style={{ fontStyle: 'italic'}}>Poured coffee on my lap. There goes half my stipend from a StarShekels cup!</Text>
          </View>
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  stressed: {
    color: "purple",
    fontStyle: 'italic'
  }
});
