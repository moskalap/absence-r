import {Navigation, ScreenVisibilityListener} from 'react-native-navigation';

import Types from './NavigationTypes';
import Groups from './Groups';
import Students from './Students';

import Push from './types/Push';
import Drawer from './types/Drawer';
import ListScreen from './types/ListScreen';
import DummyScreen from './types/DummyScreen';
import LightBox from './types/LightBox';
import Notification from './types/Notification';
import Modal from './types/Modal';
import CustomTopBarScreen from './types/CustomTopBarScreen';
import CustomButtonScreen from './types/CustomButtonScreen';
import TopTabs from './types/TopTabs';
import TabOne from './types/tabs/TabOne';
import TabTwo from './types/tabs/TabTwo';

import CollapsingHeader from './transitions/CollapsingHeader';
import SharedElementTransitions from './transitions/SharedElementTransitions';

import Cards from './transitions/sharedElementTransitions/Cards/Cards';
import CardsInfo from './transitions/sharedElementTransitions/Cards/Info';

import Masonry from './transitions/sharedElementTransitions/Masonry/Masonry';
import MasonryItem from './transitions/sharedElementTransitions/Masonry/Item';

export function registerScreens() {
  Navigation.registerComponent('absence.Types', () => Types);
  Navigation.registerComponent('absence.Groups', () => Groups);
  Navigation.registerComponent('absence.Students', () => Students);

  Navigation.registerComponent('absence.Types.Push', () => Push);
  Navigation.registerComponent('absence.Types.Drawer', () => Drawer);
  Navigation.registerComponent('absence.Types.Screen', () => Drawer);
  Navigation.registerComponent('absence.Types.ListScreen', () => ListScreen);
  Navigation.registerComponent('absence.Types.DummyScreen', () => DummyScreen);
  Navigation.registerComponent('absence.Types.Modal', () => Modal);
  Navigation.registerComponent('absence.Types.LightBox', () => LightBox);
  Navigation.registerComponent('absence.Types.Notification', () => Notification);
  Navigation.registerComponent('absence.Types.CustomTopBarScreen', () => CustomTopBarScreen);
  Navigation.registerComponent('absence.Types.CustomButtonScreen', () => CustomButtonScreen);
  Navigation.registerComponent('absence.Types.TopTabs', () => TopTabs);
  Navigation.registerComponent('absence.Types.TopTabs.TabOne', () => TabOne);
  Navigation.registerComponent('absence.Types.TopTabs.TabTwo', () => TabTwo);

  Navigation.registerComponent('absence.Students.CollapsingHeader', () => CollapsingHeader);
  Navigation.registerComponent('absence.Students.SharedElementTransitions', () => SharedElementTransitions);
  Navigation.registerComponent('absence.Students.SharedElementTransitions.Cards', () => Cards);
  Navigation.registerComponent('absence.Students.SharedElementTransitions.Cards.Info', () => CardsInfo);
  Navigation.registerComponent('absence.Students.SharedElementTransitions.Masonry', () => Masonry);
  Navigation.registerComponent('absence.Students.SharedElementTransitions.Masonry.Item', () => MasonryItem);
}

export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({screen}) => console.log(`Displaying screen ${screen}`),
    didAppear: ({screen, startTime, endTime, commandType}) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
    willDisappear: ({screen}) => console.log(`Screen will disappear ${screen}`),
    didDisappear: ({screen}) => console.log(`Screen disappeared ${screen}`)
  }).register();
}
