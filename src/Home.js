/**
 * 
 */

import React, {Component} from 'react';
import {StatusBar, SafeAreaView} from 'react-native';
import AppNavigator from './AppNavigator';
import { PRIMARY_COLOR } from './util/Constants';

export default class Home extends Component {
    constructor (props) {
      super(props);
    }

    render() {
      return (
          <SafeAreaView style={{ flex: 1, backgroundColor: PRIMARY_COLOR }}>
              <StatusBar barStyle='light-content' backgroundColor={PRIMARY_COLOR} />
              <AppNavigator />
          </SafeAreaView>
      );
  }
}