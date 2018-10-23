/**
 * 
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux'
import createAppStore from './src/store';
import Home from './src/Home';

export default class App extends Component {
    constructor (props) {
      super(props);
      this.state = {
        store: createAppStore()
      }
      console.disableYellowBox = true;
    }

    render() {
      return (
        <Provider store={this.state.store}>
          <Home/>
        </Provider>
          
      );
  }
}

/**
 * <SafeAreaView style ={{flex:0, backgroundColor: PRIMARY_COLOR}}>
            <StatusBar barStyle='light-content' backgroundColor={PRIMARY_COLOR} />
            <AppNavigator />
          </SafeAreaView>
 */