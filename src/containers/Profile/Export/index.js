import React, { Component } from 'react';
import { Button, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SCREEN_HEIGHT, SCREEN_WIDTH, NavbarHeight } from '../../../utils/dimension';

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT-NavbarHeight
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default class Export extends React.Component {

  render() {
    return (  
      <View style={[styles.container, styles.center]}>
        <Text>
          Export
        </Text>
      </View>
    );
  }

}