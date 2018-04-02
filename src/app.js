import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {registerScreens, registerScreenVisibilityListener} from './screens';


// screen related book keeping
registerScreens();
registerScreenVisibilityListener();

const tabs = [{
  label: 'Przedmioty',
  screen: 'absence.Types',
  icon: require('../img/list.png'),
  title: 'Navigation Types',
}, {
  label: 'Grupy',
  screen: 'absence.Groups',
  icon: require('../img/swap.png'),
  title: 'Zarządzanie grupami',
},{
    label: 'Studenci',
    screen: 'absence.Students',
    icon: require('../img/delete.png'),
    title: 'Zarządzanie studentami',
  },
    {
        label: 'Ustawienia',
        screen: 'absence.Students',
        icon: require('../img/settings.png'),
        title: 'Ustawienia',
    }];


// this will start our app
Navigation.startTabBasedApp({
  tabs,
  animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
  tabsStyle: {
    tabBarBackgroundColor: '#003a66',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#ff505c',
    tabFontFamily: 'BioRhyme-Bold',
  },
  appStyle: {
    tabBarBackgroundColor: '#003a66',
    navBarButtonColor: '#ffffff',
    tabBarButtonColor: '#ffffff',
    navBarTextColor: '#ffffff',
    tabBarSelectedButtonColor: '#ff505c',
    navigationBarColor: '#003a66',
    navBarBackgroundColor: '#003a66',
    statusBarColor: '#002b4c',
    tabFontFamily: 'BioRhyme-Bold',
  },
  drawer: {
    left: {
      screen: 'absence.Types.Drawer'
    }
  }
});
