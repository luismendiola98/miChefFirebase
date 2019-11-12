import React from 'react';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Post from '../screens/Post';
import Activity from '../screens/Activity';
import Profile from '../screens/Profile';

const TabNavigator = createBottomTabNavigator({
  Home: { 
    screen: Home, navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon: () => (
        <Ionicons name= 'md-home' size={32} />
      )
    }
  },
  Search: { 
    screen: Search, navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon: () => (
        <Ionicons name= 'ios-search' size={32} />
      )
    }
  },
  Post: { 
    screen: Post, navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon: () => (
        <Ionicons name= 'md-add-circle-outline' size={32} />
      )
    }
  },
  Activity: { 
    screen: Activity, navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon: () => (
        <Ionicons name= 'ios-notifications-outline' size={32} />
      )
    }
  },
  Profile: { 
    screen: Profile, navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon: () => (
        <Ionicons name= 'md-person' size={32} />
      )
    }
  }
});

export default createAppContainer(TabNavigator);