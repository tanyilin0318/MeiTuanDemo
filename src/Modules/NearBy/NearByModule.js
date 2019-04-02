import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,FlatList
} from 'react-native';
import { createStackNavigator,createAppContainer,createBottomTabNavigator } from 'react-navigation';
import { DefaultTabBar} from 'react-native-scrollable-tab-view';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import NavigationItem from '../../Widget/NavigatorItem';

import  Screen  from '../../common/Screen';
import  Color  from '../../common/Colors';
import Cell from '../../Widget/Cell';
import Api from '../../main/Api';

import NearList from './NearByList';


type Props = {
  navigation:any,
}

class NearBy extends Component<Props>{

  static navigationOptions = ({navigation}:any) => ({
    headerLeft:(
      <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10}}>
        <Image source={require('../../img/public/icon_food_merchant_address.png')} style = {styles.leftICon}/>
        <Text style={styles.leftText}>附近</Text>
      </TouchableOpacity>
    ),
    headerRight:(
      <TouchableOpacity style = {styles.searchBar}>
        <Image source={require('../../img/home/search_icon.png')} style = {styles.searchIcon}/>
        <Text>找附近的吃喝玩乐</Text>
      </TouchableOpacity>
    ),
    headerStyle:{
      backgroundColor:'white'
    }
  });

  constructor(props) {
    super(props);
    this.state = {
      text:'',
      dataArray:[],
      refreshing:false
    };
  }

  render() {
    let titles = ['享美食', '住酒店', '爱玩乐', '全部']
    let types =
    [ ['热门', '面包甜点', '小吃快餐', '川菜', '日本料理', '韩国料理', '台湾菜', '东北菜'],
      ['热门', '商务出行', '公寓民宿', '情侣专享', '高星特惠'],
      ['热门', 'KTV', '足疗按摩', '洗浴汗蒸',  '电影院', '美发', '美甲'],
      []]

      return (
        <ScrollableTabView
          style={styles.container}
          tabBarBackgroundColor='white'
          tabBarActiveTextColor='#FE566D'
          tabBarInactiveTextColor='#555555'
          tabBarTextStyle={styles.leftText}
          tabBarUnderlineStyle={styles.tabBarUnderline}
        >
          {titles.map((title, i) =>
            <View tabLabel={titles[i]} style={styles.container}>
              <NearList
                types={types[i]}
                tabLable = {titles[i]}
                navigation = {this.props.navigation}
              />
            </View>
            )}

        </ScrollableTabView>
      );
  }

}



const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    searchBar: {
      width: Screen.width * 0.7,
      height: 30,
      borderRadius: 19,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#eeeeee',
      alignSelf: 'center',
  },
  searchIcon: {
      width: 20,
      height: 20,
      margin: 5,
  },
  leftICon:{
    width: 15,
    height: 15,
  },
  leftText:{
    fontSize: 14,
    color: '#333333'
  },
  tabBarUnderline: {
      backgroundColor: '#FE566D'
  },
});


const NearNavigator = createStackNavigator({
  Near:{
    screen:NearBy
  }
});

export default createAppContainer(NearNavigator);
