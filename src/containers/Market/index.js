import React, { Component } from 'react';
import { Button, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { SCREEN_HEIGHT, SCREEN_WIDTH, NavbarHeight } from '../../utils/dimension';
import NavigationBar from 'react-native-navbar';
import CodePush from "react-native-code-push";
import { AppState } from 'react-native';

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
    width: SCREEN_WIDTH
  }
});

export default class MarkertScreen extends React.Component {

  static navigationOptions = {
    drawerLabel: '首页',
    drawerIcon: ({ focused }) => (
      <Icon name='md-bonfire' size={24} color={focused ? '#ff0000' : '#000'} />
    )
  };
  
  state = {
    progress: 0
  }

  componentDidMount() {
    this.codePushSync(); 
    AppState.addEventListener('change', (newState) => {
      if (newState === 'active') {
        this.codePushSync();
      }
    })
  }

  codePushSync() {
    CodePush.sync(
      { installMode: CodePush.InstallMode.IMMEDIATE, updateDialog: true },
      this.codePushStatusDidChange.bind(this),
      this.codePushDownloadDidProgress.bind(this)
    );
  }

  codePushStatusDidChange(status) {
    switch (status) {
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
          console.log("DOWNLOADING_PACKAGE")
          break;
      case CodePush.SyncStatus.INSTALLING_UPDATE:
          console.log("INSTALLING_UPDATE")
          break;
      case CodePush.SyncStatus.UP_TO_DATE:
          console.log("UP_TO_DATE")
          break;
      case CodePush.SyncStatus.UPDATE_IGNORED:
          console.log("UPDATE_IGNORED")
          break;
      case CodePush.SyncStatus.UPDATE_INSTALLED:
          console.log("UPDATE_INSTALLED")
          break;
      case CodePush.SyncStatus.UNKNOWN_ERROR:
          console.log("UNKNOWN_ERROR")
          break;
    }
  }

  codePushDownloadDidProgress(progress) {
    console.log('push progress: ---', progress);
    this.setState({ progress: progress.receivedBytes/progress.totalBytes });
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
        <NavigationBar title={{ title: '首页' }} leftButton={this.renderLeftButton()} />
        <View style={[styles.content, styles.center]}>
          <Text>
            111111
          </Text>
          <Text>
            {(this.state.progress*100).toFixed(2)}%
          </Text>
        </View>
      </View>
    );
  }

}