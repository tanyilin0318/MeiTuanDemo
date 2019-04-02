import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';

import Screen from '../../../common/Screen';

type Props = {
  info:Object,
  onPress:Function
}

export default class GridItem extends Component<Props>{


  render() {

    let info = this.props.info;
    let title = info.title;
    let subTitle = info.subTitle;
    let icon = info.icon
    return (
      <TouchableOpacity style = {styles.container} onPress = {this.props.onPress}>
        <View>
          <Text style = {styles.title}>{title}</Text>
          <Text style = {styles.subTitle}>{subTitle}</Text>
        </View>
        <Image source={icon} style = {styles.imageV}/>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: Screen.width/2 - Screen.onePixel,
    height: Screen.width/4
  },
  title:{
    fontSize: 14
  },
  subTitle:{
    fontSize: 12
  },
  imageV:{
    width:Screen.width/5,
    height: Screen.width/5,
    borderRadius: Screen.width/10
  }

});
