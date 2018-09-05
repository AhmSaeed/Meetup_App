import { TabNavigator, TabBarBottom } from 'react-navigation';
import React, {Component} from 'react';
import Colors from '../../constants/Colors';
import {
    HomeScreen,
    NotificationsScreen,
    ProfileScreen
} from '../screens';
import { Ionicons } from '@expo/vector-icons';

const NavbarDefaultStyle = {
  backgroundColor: Colors.$redColor,
};

export default TabNavigator({
  /*{
    Home: {
      screen: HomeScreen,
    },
    Notifications: {
      screen: NotificationsScreen
    },
    Profile: {
      screen: ProfileScreen
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Notifications') {
          iconName = `ios-notifications${focused ? '' : '-outline'}`;
        } else if (routeName === 'Profile') {
          iconName = `ios-contacts${focused ? '' : '-outline'}`;
        } 

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: Colors.$redColor,
      inactiveTintColor: Colors.$blackBlueColor,
      showLabel: false,
      style: {
        backgroundColor: Colors.$whiteColor,
      }
    },
    animationEnabled: true,
    swipeEnabled: true,
  }*/
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: Colors.$redColor
      },
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name="ios-home"
          size={25}
          color={tintColor}
        />
      ),
    }),
  },
  Notifications: {
    screen: NotificationsScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: Colors.$redColor
      },
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name="ios-notifications"
          size={25}
          color={tintColor}
        />
      ),
    },
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: Colors.$redColor
      },
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name="ios-contact"
          size={25}
          color={tintColor}
        />
      ),
    },
  },
}, {
  swipeEnabled: true,
  animationEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: false,
    showIcon: true,
    inactiveTintColor: Colors.$blackBlueColor,
    activeTintColor: Colors.$redColor,
    pressColor: Colors.$redColor,
    indicatorStyle: { backgroundColor: Colors.$redColor },
    style: {
      backgroundColor: Colors.$whiteColor,
    },
  },
}
);