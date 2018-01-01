import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import store from './store';

import { registerScreens } from './screens';

registerScreens(store, Provider); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Home',
      screen: 'tab.Home', // this is a registered name for a screen
      title: 'Home',
      icon: require('../img/one.png'),
      navigatorStyle: {
        navBarHidden: true
      }
    },
    {
      label: 'Heroes',
      screen: 'tab.Heroes',
      title: 'Heroes',
      icon: require('../img/one.png'),
      navigatorStyle: {
        navBarHidden: true
      }
    },
    {
      label: 'Settings',
      screen: 'tab.Settings',
      title: 'Settings',
      icon: require('../img/one.png'),
      navigatorStyle: {
        navBarHidden: true
      }
    },
  ]
});
