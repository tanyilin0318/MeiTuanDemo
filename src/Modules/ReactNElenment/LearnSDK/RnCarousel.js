import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image
} from 'react-native';
import Screen from '../../common/Screen';
import { createAppContainer,createStackNavigator,createBottomTabNavigator } from 'react-navigation';
import Carousel from 'react-native-carousel';
class Elenment extends Component {
  static navigationOptions= ({navigation}: any) => ({
    headerTitle:(
      <Text>Elenment</Text>
    )
  })

  constructor(props) {
    super(props);
    this.state={
      selectedIndex:0,
    }
  }

  render() {
    let pic = {
      uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547444651579&di=32044729bffe23de2f5b35f8791cb72c&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fac6eddc451da81cb3002703e5866d01608243158.jpg'
    };

    let buttons =['美食','酒店','厕所','加油站'];

    let list = [
      {
        name: 'Amy Farha',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Chris Jackson',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Vice Chairman'
      },
    ]

    const indexSel = this.state

    return (
      <Carousel width={375}
      indicatorOffset={540}
      indicatorColor = 'red'
      indicatorSize  = { 30}
      indicatorSpace = {20}
      >
        <View style={styles.container}>
          <Text>page 1</Text>
        </View>
        <View style={styles.container}>
          <Text>Page 2</Text>
        </View>
        <View style={styles.container}>
          <Text>Page 3</Text>
        </View>
      </Carousel>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    width: Screen.width,
    height: 200,
    backgroundColor: 'yellow'
  },
});

const ElenmentNav = createStackNavigator({
  home:{
    screen:Elenment
  }
});

export default createAppContainer(ElenmentNav);
