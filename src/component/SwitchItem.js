import React, { Component } from 'react';
import { View, StyleSheet, Switch, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../utils/dimension';
import BetweenItem from './BetweenItem';

export default class SwtichItem extends React.Component {

  static propTypes = {
    value: React.PropTypes.bool.isRequired,
    onValueChange: React.PropTypes.func.isRequired
  }

  static defaultProps = {
    value: false
  }

  render() {
    return (  
      <BetweenItem title={this.props.title}>
        <Switch onValueChange={this.props.onValueChange} value={this.props.value} />
      </BetweenItem>  
    );
  }

}