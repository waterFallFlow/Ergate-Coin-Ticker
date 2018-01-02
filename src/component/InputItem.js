import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../utils/dimension';
import BetweenItem from './BetweenItem';

const styles = StyleSheet.create({
  textInputStyle: {
    width: SCREEN_WIDTH/2,
    height: 44,
    textAlign: 'right'
  }
});

export default class InputItem extends React.Component {

  static propTypes = {
    value: React.PropTypes.string.isRequired,
    onChangeText: React.PropTypes.func.isRequired
  }

  static defaultProps = {
    value: '0'
  }

  render() {
    return (  
      <BetweenItem title={this.props.title}>
        <TextInput
          autoCorrect={false}
          style={[styles.textInputStyle, {color: '#333333'}]}
          selectionColor={'#33333333'}
          underlineColorAndroid="transparent"
          placeholder={'0'}
          placeholderTextColor={'#cccccc'}
          keyboardType="numeric"
          onChangeText={this.props.onChangeText}
          value={this.props.value} 
        />
      </BetweenItem>  
    );
  }

}