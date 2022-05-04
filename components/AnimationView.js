/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Text, View, Animated, Dimensions, Button } from 'react-native';
  
class AnimationView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      right: new Animated.Value(
        Dimensions.get('window').width - 200),
      radius: new Animated.Value(0),
    };
  }
  
  leftToRight = () => {
    Animated.parallel([
      Animated.timing(this.state.radius, {
        toValue: 200,
        duration: 4000,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.right, {
        toValue: 0,
        duration: 4000,
        useNativeDriver: false,
      }),
    ]).start();
  };
  
  rightToLeft = () => {
    Animated.parallel([
      Animated.timing(this.state.radius, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }),
      Animated.timing(this.state.right, {
        toValue: Dimensions.get('window').width - 200,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
  };
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Animated.View
          style={{
            marginTop: '30%',
            backgroundColor: 'red',
            height: 200,
            width: 200,
            right: this.state.right,
            position: 'absolute',
            justifyContent: 'center',
            borderRadius: this.state.radius,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
            }}>
            Animated View
          </Text>
        </Animated.View>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            height: '20%',
            justifyContent: 'space-evenly',
          }}>
          <Button title="Left to right" 
            onPress={() => this.leftToRight()} />
          <Button title="right to left" 
            onPress={() => this.rightToLeft()} />
        </View>
      </View>
    );
  }
}
  
export default AnimationView;