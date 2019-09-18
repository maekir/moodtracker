import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements'

export default class MenuScreen extends React.Component {
    static navigationOptions = {
        title: '12 Dec 2018'
    }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Card title="Mood">
          <View>
            <Text style={styles.exhausted}>Exhausted</Text>
            <Text style={{ marginTop: 10 }}>Notes:</Text>
            <Text style={{ fontStyle: 'italic'}}>TV show marathons tire one out like nothing else can! Not even the gym (not that I would know)</Text>
          </View>
        </Card>
        <Card title="Social">
          <View>
            <Text style={{ fontStyle: 'italic'}}>Conflict</Text>
            <Text style={{ marginTop: 10 }}>Notes:</Text>
            <Text style={{ fontStyle: 'italic'}}>Boyfriend stole a chocolate from my advent calendar. Is that where I draw the line..?</Text>
          </View>
        </Card>
        <Card title="Motivation">
        <View>
            <Text style={{ fontStyle: 'italic'}}>Unmotivated, Unproductive</Text>
            <Text style={{ marginTop: 10 }}>Notes:</Text>
            <Text style={{ fontStyle: 'italic'}}>It's totally realistic to code an app in two days! Self care day every day, projects can wait</Text>
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
    color: "gray",
    fontStyle: 'italic'
  }
});
