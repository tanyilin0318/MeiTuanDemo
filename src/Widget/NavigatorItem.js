import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ViewPropTypes
} from 'react-native';

type Props={
  icon?:any,
  title?:string,
  iconStyle?:ViewPropTypes.style,
  titleStyle?:ViewPropTypes.style,
  onPress?:Function
}

export default class NavigationItem extends Component<Props>{
  constructor(props) {
    super(props)
  }

  render() {

    let icon = this.props.icon && <Image source={this.props.icon} style = {[styles.icon,this.props.iconStyle]}/>

    let title = this.props.title && <Text style = {[styles.title,this.props.titleStyle]}>{this.props.title}</Text>

    return (
      <TouchableOpacity>
        {icon}
        {title}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon:{
    width: 27,
    height: 27,
    margin: 8,
  },
  title:{
    fontSize: 15,
    color:'#333333',
    margin: 8
  }
});
