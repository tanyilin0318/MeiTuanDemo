import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';

import Screen from '../../common/Screen';
import { createAppContainer,createStackNavigator,createBottomTabNavigator } from 'react-navigation';
import Carousel ,{Pagination} from 'react-native-snap-carousel';
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

  _renderItem({ item, index }) {
      return (
        <View>
          <Image source={{uri:item.avatar_url}} style = {{width:300,height:200}}/>
        </View>
      );
    }

  render() {

    let data = [
      {
        name: 'Amy Farha',
        avatar_url: 'http://img.zcool.cn/community/01e12d56ef92586ac7257d20bfaf8d.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Amy Farha',
        avatar_url: 'http://img.redocn.com/sheji/20150925/taobaotianmaonanzhuanglunbohaibao_5023492.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Amy Farha',
        avatar_url: 'http://img.zcool.cn/community/01e12d56ef92586ac7257d20bfaf8d.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Amy Farha',
        avatar_url: 'http://pic.90sjimg.com/design/00/69/99/66/9fce5755f081660431464492a9aeb003.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Amy Farha',
        avatar_url: 'http://img.zcool.cn/community/010f3456f108876ac7257d207b13cc.jpg@2o.jpg',
        subtitle: 'Vice President'
      },
      {
        name: 'Amy Farha',
        avatar_url: 'http://pic.90sjimg.com/design/00/41/83/95/5667ee70b667c.jpg',
        subtitle: 'Vice President'
      },
    ]

    return (
      <View style={styles.container}>
        <Carousel
         ref={c => {
           this._slider1Ref = c;
         }}
         data={data}
         renderItem={this._renderItem}
         sliderWidth={414}
         sliderHeight={400}
         itemWidth={300}
         itemHeight={100}
         vertical={false}
         activeSlideOffset={100}
         autoplay={true}
         loop={true}
         autoplayDelay={500}
         autoplayInterval={3000}
        />
        <Pagination
        dotsLength={6}
        activeDotIndex={1}
        containerStyle={styles.paginationContainer}
        dotColor={'red'}
        dotStyle={styles.paginationDot}
        inactiveDotColor={'black'}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        carouselRef={this._slider1Ref}
        tappableDots={!!this._slider1Ref}
        />
        <Text>这是最下边</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    width: Screen.width,
    height: 200,
    backgroundColor: 'yellow',
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
