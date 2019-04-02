import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';

type Props = {
  tintColor : any,
  normalImage: any,
  selectedImage : any,
  focused : boolean,

}

export default class TabbarItem extends Component<Props> {

  render() {
    let image = this.props.selectedImage ? this.props.selectedImage : this.props.normalImage;
    return (
      <Image source={this.props.focused ? image : this.props.normalImage}
        style = {{tintColor:this.props.titntColor,width:25,height:25}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
