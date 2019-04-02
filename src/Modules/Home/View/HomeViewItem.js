import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

import Screen from '../../../common/Screen';
type Props={
  onPress : Function,
  icon: any,
  title: string
}

export default class HomeMenuItem extends Component<Props>{



  render() {
    return (
      <TouchableOpacity key={this.props.title} style = {styles.container} onPress = {this.props.onPress}>
        <Image source={this.props.icon} style = {styles.Icon} resizeMode='contain'/>
        <Text style = {styles.title}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Screen.width/5,
    height: Screen.width/5,
    backgroundColor: 'white'
  },
  Icon:{
    width: Screen.width/9,
    height: Screen.width/9,
    margin:5
  },
  title:{
    alignItems: 'center',
    color:'gray',
    fontSize: 12
  }
});
