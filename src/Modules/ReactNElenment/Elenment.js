import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

import Screen from '../../common/Screen';
import Color from '../../common/Colors';
import Button1 from './Button';
import { createAppContainer,createStackNavigator,createBottomTabNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons';

class Elenment extends Component {
  static navigationOptions= ({navigation}: any) => {
    return ({
      headerTitle: (
          <Text>Elenment</Text>

      )
    });
  }

  constructor(props) {
    super(props);
    this.state={
      selectedIndex:0,
    }
  }

  render() {
    var str = 'rgba(246, 253, 55, 1)';

    return (
      <View style={styles.container}>
        <Text>这是最下边</Text>
        <Text>{str.split(', 1)')}</Text>
        <Text>{str.split(', 1)').join(', 2)')}</Text>
        <Button1 type = {2} size = "size"/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    width: Screen.width,
    height: 200,
    backgroundColor:Color.colorWithAlpha('yellow',0.8),
    flex:2
  },
  paginationContainer: {
    paddingVertical: 8
},
paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8
}
});

const ElenmentNav = createStackNavigator({
  home:{
    screen:Elenment
  }
});

export default createAppContainer(ElenmentNav);
