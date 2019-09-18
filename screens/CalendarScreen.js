import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default class CalendarScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDayPress = this.onDayPress.bind(this);
  }

  static navigationOptions = {
    title: 'Calendar'
  }

  render() {
    return (
      <View>
        <Calendar
          style={styles.calendar}
          onDayPress={(day) => {this.props.navigation.navigate('Day'+day.day, { title: day.day })}}
          current={'2018-12-14'}
          minDate={'2018-01-01'}
          markingType={'custom'}
          theme={{
            //calendarBackground: 'gray',
            'stylesheet.calendar.header': {
              week: {
                marginTop: 5,
                flexDirection: 'row',
                justifyContent: 'space-between'}
              }
            }
          }
          markedDates={{
            '2018-12-13': {
              customStyles: {
                container: {
                  backgroundColor: 'purple',
                  elevation: 2
                },
                text: {
                  color: 'white',
                },
              }
            },
            '2018-12-12': {
              customStyles: {
                container: {
                  backgroundColor: 'gray',
                  elevation: 2,
                },
                text: {
                  color: 'white',
                },
              }
            },
          }
        }
        hideArrows={false}
        />
      </View>
    );
  }

  onDayPress(day) {
    this.setState({
      selected: day.dateString
    });
  }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: 'gray'
  }
});