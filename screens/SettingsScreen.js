import React from 'react';
import { View, StyleSheet, Alert, FlatList, TouchableOpacity, Image } from 'react-native';
import ButtonComponent from 'react-native-button-component';

export default class MenuScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };
  
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.containerAvatar}>
          <TouchableOpacity onPress={() => Alert.alert('Hey, you there!','Why are you clicking around?')}>
            <Image
              style={styles.avatarStyle}
              source={require('../assets/images/amber.png')}
            />
          </TouchableOpacity>
        </View>
      <View>
        <FlatList
          data={[
            {key: 'PROFILE'},
            {key: 'NOTIFICATIONS'},
            {key: 'LANGUAGE'},
            {key: 'TERMS OF SERVICE'}
          ]}
          renderItem={({item}) => 
          <View style={{marginBottom: 10}}>
            <ButtonComponent
              type="border"
              text={item.key}
              onPress={() => {
              }}
            />
          </View>}
          
        />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  containerAvatar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingBottom: 5,
    height: 50,
    width: '80%'
  },
  avatarStyle: {
    borderColor: 'gray', 
    width: 200, 
    height: 200, 
    borderRadius: 40, 
    borderWidth: 1
  },
});
