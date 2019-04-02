import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,Image
} from 'react-native';

import MenuItem from './HomeViewItem';
import Screen from '../../../common/Screen';

type Props = {
  menuInfos:Array<Object>,
  onPress:Function,
}

type State = {
  currentPage: number
}

export default class HeadViewMenu extends Component<Props,State>{
  constructor(props) {
    super(props)
    this.state = {
      currentPage:0
    }
  }

  render() {

    let {menuInfos} = this.props
//item 数组
    let dataListArr = menuInfos.map(
      (info,i)=>{
        return(
          <MenuItem
            key={i}
            title = {info.title}
            icon = {info.icon}
            onPress = {() => {
              this.props.onPress(i,info);
            }}
          />
        );

      }
    )

//十个一组的 页面
    let menusViews = [];
    let pageCount = Math.ceil(dataListArr.length/10);

    for (var i = 0; i < pageCount; i++) {
      let items = dataListArr.slice(i*10,i*10+10);
      let menuView = (
        <View style = {styles.itemsView} key={i}>
          {items}
        </View>
      )
      menusViews.push(menuView);
    }


    return (
      <View style = {styles.container} >
        <ScrollView
          horizontal = {true}
          pagingEnabled = {true}
          showsHorizontalScrollIndicator = {false}
          onScroll={(e)=>{this.onScroll(e)}}
        >
          <View style = {styles.menuView}>
            {menusViews}
          </View>
        </ScrollView>
      </View>
    );
  }

  onScroll(e){
    let x = e.nativeEvent.contentOffset.x;
    let currentPage = Math.round(x/Screen.width)
    console.log('onScroll  ' + e.nativeEvent.contentOffset.x + '  page ' + currentPage + '  current ' + this.state.currentPage)
    if (this.state.currentPage != currentPage) {
      this.setState({
        currentPage:currentPage
      })
    }
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  menuView:{
   flexDirection: 'row',
 },
  itemsView:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: Screen.width,
    backgroundColor: 'white'
  }
});
