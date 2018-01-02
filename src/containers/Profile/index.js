import React, { Component } from 'react';
import { Button, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar';

import SwitchItem from '../../component/SwitchItem';
import InputItem from '../../component/InputItem';
import { SCREEN_HEIGHT, SCREEN_WIDTH, NavbarHeight } from '../../utils/dimension';
import localStorage from '../../utils/storage';

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    height: SCREEN_HEIGHT - NavbarHeight,
    width: SCREEN_WIDTH,
    alignItems: 'center',
    backgroundColor: 'rgb(247,239,224)'
  },
  btn: {
    width: 80,
    height: 44,
    backgroundColor: 'white',
    borderRadius: 4,
    marginTop: 44
  }
});

export default class ProfileScreen extends React.Component {

  static navigationOptions = {
    drawerLabel: '设置',
    drawerIcon: ({ focused }) => (
      <Icon name='md-cog' size={24} color={focused ? '#ff0000' : '#000'} />
    )
  };

  state = {
    total: '1',
    minNumber: '0',
    maxNumber: '100',
    isSole: false
  }

  componentDidMount() {
    localStorage('randomConfig', 'get', null, (result) => {
      if (result) {
        this.setState({
          total: result.total,
          minNumber: result.minNumber,
          maxNumber: result.maxNumber,
          isSole: result.isSole
        });
      }
    })
  }

  onChangeTotal = (total) => {
    this.setState({ total });
  }

  onChangeMinNumber = (minNumber) => {
    this.setState({ minNumber });
  }

  onChangeMaxNumber = (maxNumber) => {
    this.setState({ maxNumber });
  }

  onValueChange = (value) => {
    this.setState({ isSole: value });
  }

  saveConfigData = () => {
    localStorage('randomConfig', 'merge', this.state, () => {
      alert('保存成功!');
    });
  }

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
        <View style={styles.content}>
          <InputItem title="数目" onChangeText={this.onChangeTotal} value={this.state.total} />
          <InputItem title="最小数值" onChangeText={this.onChangeMinNumber} value={this.state.minNumber} />
          <InputItem title="最大数值" onChangeText={this.onChangeMaxNumber} value={this.state.maxNumber} />
          <SwitchItem title="是否为唯一随机数:" onValueChange={this.onValueChange} value={this.state.isSole} />
          <TouchableOpacity style={[styles.btn, styles.center]} onPress={this.saveConfigData} >
            <Text style={{ color: '#28BC91', fontSize: 16 }}>  
              保存
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}