import React, { Component } from 'react';
import { Button, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/dimension';
import NavigationBar from 'react-native-navbar';
import Entrance from './Entrance';
import Transfer from './Transfer';
import Export from './Export';

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default class ProfileScreen extends React.Component {

  static navigationOptions = {
    drawerLabel: '设置',
    drawerIcon: ({ focused }) => (
      <Icon name='md-cog' size={24} color={focused ? '#ff0000' : '#000'} />
    )
  };

  renderLeftButton () {
    return (
      <TouchableOpacity
        onPress={() => {this.props.navigation.navigate('DrawerOpen')}}
        style={[styles.center, {width: 80, height: 40, paddingTop: 6, marginLeft: -10}]}
      >
        <Icon name='md-menu' size={24} color={'#000'} />
      </TouchableOpacity>
    )
  }

  render() {
    return (  
      <View style={styles.container}>
        <NavigationBar title={{ title: '设置' }} leftButton={this.renderLeftButton()} />
        <Entrance />
      </View>
    );
  }

}