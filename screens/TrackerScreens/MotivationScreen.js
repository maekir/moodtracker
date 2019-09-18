import React, { Component } from 'react';
import { Image, Alert, StyleSheet, TouchableOpacity, TextInput, View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { RoundButton } from 'react-native-button-component';

export default class SleepScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.title
    })

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
                    <View style={{ height:225, marginBottom: 30 }}>
                        <View style={styles.trackRowContainer}>
                            <TouchableOpacity 
                                style={styles.trackButton} 
                                onLongPress={() => Alert.alert(
                                    "Motivated", 
                                    "You can move mountains! Or you feel like you can."
                                    )
                                }>
                                <Image
                                    source={require("../../assets/images/TrackerImages/motivated0.png")}
                                    style={styles.imageStyle}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={styles.trackButton} 
                                onLongPress={() => Alert.alert(
                                    "Unmotivated", 
                                    "Just one of those days where nothing seems worth it."
                                    )
                                }>
                                <Image
                                    source={require("../../assets/images/TrackerImages/motivated1.png")}
                                    style={styles.imageStyle}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.trackRowContainer}>
                            <TouchableOpacity 
                                style={styles.trackButton} 
                                onLongPress={() => Alert.alert(
                                    "Productive", 
                                    "You went and moved mountains! Or just did the dishes. Either is a feat!"
                                    )
                                }>
                                <Image
                                    source={require("../../assets/images/TrackerImages/motivated2.png")}
                                    style={styles.imageStyle}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={styles.trackButton} 
                                onLongPress={() => Alert.alert(
                                    "Unproductive", 
                                    "Uh-oh. Maybe tomorrow."
                                    )
                                }>
                                <Image
                                    source={require("../../assets/images/TrackerImages/motivated3.png")}
                                    style={styles.imageStyle}
                                />
                            </TouchableOpacity>
                    </View>
                    </View>
                    <View style={styles.textAreaContainer} >
                        <TextInput
                            style={styles.textArea}
                            underlineColorAndroid="transparent"
                            placeholder="Add a note"
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
    trackButton: {
        height: 100, 
        width: 100, 
        borderRadius: 20,
        marginRight: 5,
        marginLeft: 5
    },
    trackRowContainer: {
        flex:1, 
        justifyContent: 'center', 
        flexDirection: 'row',
        paddingTop: 20
    },
    imageStyle: {
        borderColor: 'gray', 
        width: 100, 
        height: 100, 
        borderRadius: 20, 
        borderWidth: 1
    }
})
