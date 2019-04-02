import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image
} from 'react-native';
import { createStackNavigator,createAppContainer,createBottomTabNavigator ,createNavigationContainer,createTabNavigator} from 'react-navigation';

import Color from '../common/Colors';
import TabBarItem from '../Widget/TabBarItem';
import Home from '../Modules/Home/HomeModule';
import Mine from '../Modules/Mine/MineModule';
import Order from '../Modules/Order/OrderModule';
import NearBy from '../Modules/NearBy/NearByModule';
import Elenment from '../Modules/ReactNElenment/Elenment';

const lightContentScenes = ['Home', 'Mine']

function getCurrentRouteName(navigationState: any) {
    if (!navigationState) {
        return null
    }
    const route = navigationState.routes[navigationState.index]
    // dive into nested navigators
    if (route.routes) {
        return getCurrentRouteName(route)
    }
    return route.routeName
}


export default class TabBar extends Component{

  constructor(props) {
    super(props)
    StatusBar.setBarStyle('light-content')
  }

  render() {
    return (
      <Navigator
        onNavigationStateChange = {
          (prevState, currentState) =>{
            const currentScene = getCurrentRouteName(currentState)
            const previousScene = getCurrentRouteName(prevState)
            if (previousScene !== currentScene) {
              console.log(lightContentScenes.indexOf(currentScene));
              if (lightContentScenes.indexOf(currentScene) > 0) {
                StatusBar.setBarStyle('light-content')
              } else {
                StatusBar.setBarStyle('dark-content')
              }
            }
          }
        }
      />
    );
  }
}

const Tab = createBottomTabNavigator({
  Elenment:{
    screen:Elenment,
    navigationOptions:({navigation}) => ({
      tabBarLabel:'组件',
      tabBarIcon:({tintColor,focused}) => (
        <TabBarItem
          focused = {focused}
          tintColor = {tintColor}
          normalImage = {require('../img/tabbar/tabbar_homepage.png') }
          selectedImage = {require('../img/tabbar/tabbar_homepage_selected.png')}
        />
      )
    })
  },
  Home:{
    screen:Home,
    navigationOptions:({navigation}) => ({
      tabBarLabel:'团购',
      tabBarIcon:({tintColor,focused}) => (
        <TabBarItem
          focused = {focused}
          tintColor = {tintColor}
          normalImage = {require('../img/tabbar/tabbar_homepage.png') }
          selectedImage = {require('../img/tabbar/tabbar_homepage_selected.png')}
        />
      )
    })
  },
  NearBy:{
    screen:NearBy,
    navigationOptions:({navigation}) => ({
      tabBarLabel:'附近',
      tabBarIcon:({focused}) => (
        <Image source={!focused ? require('../img/tabbar/tabbar_discover.png') : require('../img/tabbar/tabbar_discover_selected.png')}
        style = {{width:25,height:25}}/>
      )
    })
  },
  Order:{
    screen:Order,
    navigationOptions:({navigation}) => ({
      tabBarLabel:'订单',
      tabBarIcon:({focused}) => (
        <Image source={!focused ? require('../img/tabbar/tabbar_order.png') : require('../img/tabbar/tabbar_order_selected.png')}
        style = {{width:25,height:25}}/>
      )
    })
  },
  Mine:{
    screen:Mine,
    navigationOptions:({navigation}) => ({
      tabBarLabel:'我的',
      tabBarIcon:({focused}) => (
        <Image source={!focused ? require('../img/tabbar/tabbar_mine.png') : require('../img/tabbar/tabbar_mine_selected.png')}
        style = {{width:25,height:25}}/>
      )
    })
  },
},{
  tabBarPosition: 'bottom',
        lazy: true,
        animationEnabled: false,
        swipeEnabled: false,
        tabBarOptions: {
            activeTintColor: Color.primary,
            inactiveTintColor: Color.gray,
            style: {backgroundColor: '#ffffff'},
        },
});

// const Nav = createStackNavigator({
//   Tab:{
//     screen:Tab
//   }
// });

const Navigator = createAppContainer(Tab);

// export default Navigator;
