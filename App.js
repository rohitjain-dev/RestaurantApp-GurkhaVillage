/**
 * 
 */

import React, {Component} from 'react';
import {StatusBar, SafeAreaView, Text, View} from 'react-native';

import AppNavigator from './src/AppNavigator';
import { PRIMARY_COLOR, SECONDARY_COLOR } from './src/util/Constants';

export default class App extends Component {
    constructor (props) {
      super(props);
      console.disableYellowBox = true;
    }

    render() {
      return (
          <SafeAreaView style ={{flex:1, backgroundColor: PRIMARY_COLOR}}>
            <StatusBar barStyle='light-content' backgroundColor={PRIMARY_COLOR} />
            <AppNavigator />
          </SafeAreaView>
          
      );
  }
}