import { Navigation } from 'react-native-navigation';


//tab screens
import Home from './Home';
import Heroes from '../containers/heroes';
import Settings from './Settings';

//push screens
import HeroAdd from './HeroAdd';
import HeroView from './HeroView';
import HeroEdit from './HeroEdit';

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  Navigation.registerComponent('tab.Home', () => Home);
  Navigation.registerComponent('tab.Heroes', () => Heroes, store, Provider);
  Navigation.registerComponent('tab.Settings', () => Settings);
  Navigation.registerComponent('push.HeroAdd', () => HeroAdd, store, Provider);
  Navigation.registerComponent('push.HeroView', () => HeroView, store, Provider);
  Navigation.registerComponent('push.HeroEdit', () => HeroEdit, store, Provider);
}
