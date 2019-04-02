import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import Screen from '../common/Screen';
import Color from '../common/Colors';

let count = 0;

type Props={
  info:Object,
  onPress:Function,
}

export default class Cell extends Component<Props> {
  constructor(props) {
    super(props)

  }

  render() {

    let {info} = this.props

    return (
      <TouchableOpacity style={styles.cell} onPress={() => this.props.onPress(info)}>
        <View style = {styles.imageBackView}>
          <Image source={{uri:'https://s1.st.meishij.net/r/31/161/2290281/a2290281_24360.jpg'}} style = {styles.imageView}/>
        </View>
        <View style = {styles.titleBackView}>
          <Text style = {styles.title}>{info.mname}</Text>
          <Text style = {styles.subTitle}>[{info.range}]{info.title}</Text>
          <Text style = {styles.price}>${info.price}</Text>
        </View>
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  container: {

  },
  cell:{
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F3F3'
  },
  imageBackView:{
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageView:{
    width: 70,
    height: 70
  },
  titleBackView:{

  },
  title:{
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop:5
  },
  subTitle:{
    marginLeft: 15,
    marginTop: 8,
    color:'gray'
  },
  price:{
    fontSize: 12,
    marginLeft: 15,
    marginTop:10,
    color: Color.primary
  },
  tem:{
    width: 375,

  }

});
