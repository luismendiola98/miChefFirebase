import React from 'react';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import {HomeNavigator, SearchNavigator, PostNavigator, ActivityNavigator, ProfileNavigator} from './StackNavigator';

const TabNavigator = createBottomTabNavigator({
  Home: { 
    screen: HomeNavigator, 
    navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon: ({focused}) => (
        <MaterialCommunityIcons name= {focused ? 'home' : 'home-outline' } size={32} />
      )
    }
  },
  Search: { 
    screen: SearchNavigator, 
    navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon: ({focused}) => (
        <Ionicons name= {focused ? 'md-search' : 'ios-search'} size={32} />
      )
    }
  },
  Post: { 
    screen: PostNavigator, 
    navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon: ({focused}) => (
        <Ionicons name= {focused ? 'ios-add-circle' : 'md-add-circle-outline'} size={32} />
      )
    }
  },
  Activity: { 
    screen: ActivityNavigator, 
    navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon: ({focused}) => (
        <Ionicons name= {focused ? 'ios-notifications' : 'ios-notifications-outline'} size={32} />
      )
    }
  },
  MyProfile: { 
    screen: ProfileNavigator, 
    navigationOptions: {
      tabBarLabel: ' ',
      tabBarIcon: ({focused}) => (
        <MaterialIcons name= {focused ? 'person' : 'person-outline' }size={32} />
      )
    }
  }
});

export default createAppContainer(TabNavigator);