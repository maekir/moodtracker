import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import tabBarIcon from './utils/tabBarIcon';

import HomeScreen from './screens/HomeScreen';

import CalendarScreen from './screens/CalendarScreen';
import DayScreen1 from './screens/CalendarScreens/DayScreen1';
import DayScreen2 from './screens/CalendarScreens/DayScreen2';

import MoodScreen from './screens/MoodScreen';
import SettingsScreen from './screens/SettingsScreen';

import TrackingScreen from './screens/TrackingScreen';
import SleepScreen from './screens/TrackerScreens/SleepScreen';
import FoodScreen from './screens/TrackerScreens/FoodScreen';
import WaterScreen from './screens/TrackerScreens/WaterScreen';
import SocialScreen from './screens/TrackerScreens/SocialScreen';
import MotivationScreen from './screens/TrackerScreens/MotivationScreen';
import PainScreen from './screens/TrackerScreens/PainScreen';

const trackingStack = createStackNavigator({
  TrackingList: { screen: TrackingScreen },
  TrackerSleep: { screen: SleepScreen },
  TrackerFood: { screen: FoodScreen },
  TrackerWater: { screen: WaterScreen},
  TrackerSocial: { screen: SocialScreen},
  TrackerMotivation: { screen: MotivationScreen},
  TrackerPain: { screen: PainScreen}
}, {
  initialRouteName: 'TrackingList',
  cardStyle: { backgroundColor: '#FFFFFF' },
})

const settingsStack = createStackNavigator({
  Settings: { screen: SettingsScreen }
}, {
  initialRouteName: 'Settings',
  cardStyle: { backgroundColor: '#FFFFFF' },
})

const homeStack = createStackNavigator({
  Home: { screen: HomeScreen }
}, {
  cardStyle: { backgroundColor: '#FFFFFF' },
})

const calendarStack = createStackNavigator({
  Calendar: { screen: CalendarScreen },
  Day13: { screen: DayScreen1 },
  Day12: { screen: DayScreen2 }
}, {
  initialRouteName: 'Calendar',
  cardStyle: { backgroundColor: '#FFFFFF' },
})

const moodStack = createStackNavigator({
  Mood: { screen: MoodScreen }
}, {
  cardStyle: { backgroundColor: '#FFFFFF' },
})

const tabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: homeStack,
      navigationOptions: {
        tabBarIcon: tabBarIcon('home'),
      },
    },
    Mood: {
      screen: moodStack,
      navigationOptions: {
        tabBarIcon: tabBarIcon('face'),
      },
    },
    Tracking: {
      screen: trackingStack,
      navigationOptions: {
        tabBarIcon: tabBarIcon('add-circle'),
      },
    },
    Calendar: {
      screen: calendarStack,
      navigationOptions: {
        tabBarIcon: tabBarIcon('perm-contact-calendar'),
      },
    },
    Settings: {
      screen: settingsStack,
      navigationOptions: {
        tabBarIcon: tabBarIcon('menu')
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      animationEnabled: true,
    },
  },
  {cardStyle: { backgroundColor: '#FFFFFF' },}
);

export default tabNavigator;
