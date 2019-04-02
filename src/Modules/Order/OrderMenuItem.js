import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';

import Screen from '../../common/Screen';

type Props = {
  icon:any,
  title:string,
  onPress:Function
}

export default class OrederMenuItem extends Component<Props> {
  constructor(props) {
    super(props)
    this.state ={
      text:''
    }
  }

  render() {
    return (
      <TouchableOpacity style = {styles.container} onPress={this.props.onPress}>
        <Image source={this.props.icon} resizeMode='contain' style = {styles.icon}/>
        <Text style = {styles.title}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Screen.width/4,
    height: Screen.width/5
  },
  icon:{
    width: 35,
    height: 30,
    margin: 5
  },
  title:{
    fontSize: 12
  }
});
