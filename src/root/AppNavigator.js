import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import DrawerNavigator from './DrawerNavigator';

import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';

const TransitionConfiguration = (e) => ({
  screenInterpolator: (sceneProps) => {
    const { scene } = sceneProps;
    const { route } = scene;
    const params = route.params || {};
    const isModal = params.isModal;
    if (isModal) {
      return CardStackStyleInterpolator.forVertical(sceneProps);
    } else {
      return CardStackStyleInterpolator.forHorizontal(sceneProps);
    }
  }
});

const appNavigator = StackNavigator({
  Drawer: { screen: DrawerNavigator }
}, {
  transitionConfig: TransitionConfiguration,
  headerMode: 'none'
});

export default appNavigator