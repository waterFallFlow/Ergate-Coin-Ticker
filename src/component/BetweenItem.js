import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../utils/dimension';

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: 44,
    paddingHorizontal: 15,
    borderBottomColor: '#33333333',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  between: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'    
  },
  text: {
    color: '#333333',
    fontSize: 16
  }
});

export default class BetweenItem extends React.Component {

  static propTypes = {
    title: React.PropTypes.string.isRequired
  }

  render() {
    return (  
      <View style={[styles.container, styles.between]}>
        <Text style={styles.text}>
          {this.props.title}
        </Text>
        {this.props.children}
      </View>
    );
  }

}