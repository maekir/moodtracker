import React, { Component } from 'react';
import { Image, TouchableOpacity, StyleSheet, ScrollView, KeyboardAvoidingView, TextInput, View, Alert } from 'react-native';
import { RoundButton } from 'react-native-button-component';

export default class MoodScreen extends Component {
  static navigationOptions = {
    title: 'Mood',
  };
  constructor(props) {
    super(props);
    this.state = {
      likeButton: 'like',
    };
    this.toggleLike = this.toggleLike.bind(this);
    const like = 'SAVE'
    const liked = 'SAVED'
    this.states = {
      like: {
        text: like,
        onPress: this.toggleLike,
      },
      liked: {
        text: liked,
      },
    };
  }
  toggleLike() {
    this.setState({ likeButton: this.state.likeButton === 'like' ? 'liked' : 'like' });
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={50} enabled>
        <ScrollView style={{ paddingTop: 30, padding: 20, width: '100%' }}>
          <View style={styles.moodButtonStackContainer}>
            <View style={styles.moodButtonRowContainer}>
              <TouchableOpacity
                style={styles.moodButton}
                onLongPress={() => Alert.alert('Bitter')}>
                <Image
                  source={require("../assets/images/MoodImages/bitter.png")}
                  style={styles.imageStyle}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.moodButton}
                onLongPress={() => Alert.alert('Frustrated')}>
                <Image
                    source={require("../assets/images/MoodImages/frustrated.png")}
                    style={styles.imageStyle}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.moodButton}
                onLongPress={() => Alert.alert('Normal')}>
                <Image
                    source={require("../assets/images/MoodImages/normal.png")}
                    style={styles.imageStyle}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.moodButton}
                onLongPress={() => Alert.alert('Angry')}>
                <Image
                    source={require("../assets/images/MoodImages/angry.png")}
                    style={styles.imageStyle}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.moodButton}
                onLongPress={() => Alert.alert('Livid')}>
                <Image
                    source={require("../assets/images/MoodImages/livid.png")}
                    style={styles.imageStyle}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.moodButtonRowContainer}>
              <TouchableOpacity
                style={styles.moodButton}
                onLongPress={() => Alert.alert('miserable')}>
                <Image
                    source={require("../assets/images/MoodImages/miserable.png")}
                    style={styles.imageStyle}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.moodButton}
                onLongPress={() => Alert.alert('Sad')}>
                <Image
                    source={require("../assets/images/MoodImages/sad.png")}
                    style={styles.imageStyle}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.moodButton}
                onLongPress={() => Alert.alert('Satisfied')}>
                <Image
                    source={require("../assets/images/MoodImages/satisfied.png")}
                    style={styles.imageStyle}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.moodButton}
                onLongPress={() => Alert.alert('Joyful')}>
                <Image
                    source={require("../assets/images/MoodImages/joyful.png")}
                    style={styles.imageStyle}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.moodButton}
                onLongPress={() => Alert.alert('Elated')}>
                <Image
                    source={require("../assets/images/MoodImages/elated.png")}
                    style={styles.imageStyle}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.moodButtonRowContainer}>
              <TouchableOpacity
                style={styles.moodButton}
                onLongPress={() => Alert.alert('Exhausted')}>
                <Image
                    source={require("../assets/images/MoodImages/exhausted.png")}
                    style={styles.imageStyle}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.moodButton}
                onLongPress={() => Alert.alert('Weary')}>
                <Image
                    source={require("../assets/images/MoodImages/weary.png")}
                    style={styles.imageStyle}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.moodButton}
                onLongPress={() => Alert.alert('Detached')}>
                <Image
                    source={require("../assets/images/MoodImages/detached.png")}
                    style={styles.imageStyle}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.moodButton}
                onLongPress={() => Alert.alert('Tense')}>
                <Image
                    source={require("../assets/images/MoodImages/tense.png")}
                    style={styles.imageStyle}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.moodButton}
                onLongPress={() => Alert.alert('Stressed')}>
                <Image
                    source={require("../assets/images/MoodImages/stressed.png")}
                    style={styles.imageStyle}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.textAreaContainer} >
            <TextInput
              style={styles.textArea}
              underlineColorAndroid="transparent"
              placeholder="Add a note about how you feel today"
              placeholderTextColor="grey"
              numberOfLines={10}
              multiline={true}
            />
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <RoundButton
                type="border"
                backgroundColors={['black', 'black']}
                buttonState={this.state.likeButton}
                states={this.states}
              />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      );
  }
}

const styles = StyleSheet.create({
  minorComponentContainer: {
    margin: 20,
  },
  textAreaContainer: {
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: 'grey',
    color: 'grey'
  },
  textArea: {
    height: 125,
    padding: 10,
  },
  moodButtonStackContainer: {
    height: 200, 
    padding: 10, 
    flexDirection: 'column',
    marginBottom: 30,
  },
  moodButtonRowContainer: {
    flex: 1, 
    justifyContent: 'space-between', 
    flexDirection: 'row',
    marginBottom: 5
  },
  moodButton: {
    width: 50, 
    height: 50,
    backgroundColor: 'skyblue',
    borderRadius: 25,
  },
  imageStyle: {
    //borderColor: 'gray', 
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    //borderWidth: 1
  },
  text: {
    textAlign: 'center',
  },
})
