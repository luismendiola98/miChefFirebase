import React from 'react';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import {HomeNavigator, SearchNavigator, PostNavigator, ActivityNavigator, ProfileNavigator} from './StackNavigator';

const TabNavigator = createBottomTabNavigator({
  Home: { 
    screen: HomeNavigator, navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon: () => (
        <Ionicons name= 'md-home' size={32} />
      )
    }
  },
  Search: { 
    screen: SearchNavigator, navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon: () => (
        <Ionicons name= 'ios-search' size={32} />
      )
    }
  },
  Post: { 
    screen: PostNavigator, navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon: () => (
        <Ionicons name= 'md-add-circle-outline' size={32} />
      )
    }
  },
  Activity: { 
    screen: ActivityNavigator, navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon: () => (
        <Ionicons name= 'ios-notifications-outline' size={32} />
      )
    }
  },
  Profile: { 
    screen: ProfileNavigator, navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon: () => (
        <Ionicons name= 'md-person' size={32} />
      )
    }
  }
});

export default createAppContainer(TabNavigator);