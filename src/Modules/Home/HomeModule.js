import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  Dimensions,
  Platform,
  PixelRatio,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { createStackNavigator,createAppContainer,createBottomTabNavigator } from 'react-navigation';

import Api from '../../main/Api';
import Color from '../../common/Colors';
import Screen from '../../common/Screen';
import MenuView from './View/HomeMenuView';
import GridView from './View/HomeGridView';

import Item from './View/HomeGridItem';
import Cell from '../../Widget/Cell';
import NavigationItem from '../../Widget/NavigatorItem';

const {width,height} = Dimensions.get('window');
const onePixel = 1/PixelRatio.get();

type Props = {
  navigation: any,
}

type State = {
  discount:Array<Object>,
  dataList: Array<Object>,
  refreshing: boolean,
}

class Home extends Component<Props,State>{

  static navigationOptions = ({navigation}: any) => ({
    headerTitle:(
      <TouchableOpacity style = {styles.searchBar}>
        <Image source={require('../../img/home/search_icon.png')} style = {styles.searchIcon}/>
        <Text style = {{color:'gray'}}>首都电影院</Text>
      </TouchableOpacity>
    ),
    headerRight:(
      <View >
        <NavigationItem title='+  '/>
      </View>
    ),
    headerLeft:(
      <View style={{flexDirection: 'row'}}>
        <NavigationItem icon={require('../../img/home/icon_homepage_beauty_category.png')} style={{width: 20,height: 20,borderRadius:10}}/>
        <View style={{alignItems: 'center',justifyContent: 'center'}}>
          <Text style={{fontSize: 10}}>北京✅</Text>
          <Text style={{fontSize: 8}}>多云0`C</Text>
        </View>
      </View>
    ),
    headerStyle: {backgroundColor: Color.primary},
  });

  constructor(props:Props) {
    super(props);
    this.state = {
      dataArray:[],
      discounts:[],
      refreshing:false,
    };
  }

  componentDidMount(){
    this.requestData()
  }

  requestData(){
    this.requestRecommend();
    this.requestDiscount();
  }

  render() {
    return (
      <FlatList
        data= {this.state.dataArray}
        renderItem = {({item,index}) => this.renderItem(item,index)}
        keyExtractor = {(item) => this.keyExtractor(item)}
        ListHeaderComponent = {(i)=>this.renderHeader(i)}
        onRefresh={()=>this.requestData()}
        refreshing={this.state.refreshing}
      />
    );
  }

  renderItem(item,index){
    return(
      <Cell
        key = {item.mname}
        info = {item}
        onPress={(index)=>this.onSelectorItem(index)}
      />
    );
  }

  renderHeader(){
    return(
      <View >
        <MenuView
          menuInfos = {Api.menuInfo}
          onPress = {(index,info) => {this.selectorMenuItemClick(index,info)}}
          style = {styles.tem}
        />
        <GridView
          infos = {Api.gridInfo}
          OnGridSelected = {(index,info)=>this.selectorGridItemClick(index,info)}
        />
      </View>
    );
  }



  onSelectorItem(index){
    console.log(index);
  }

  selectorMenuItemClick=(index,info)=>{
    Alert.alert(index+" "+info.title);
  }

  selectorGridItemClick(index,info){
    Alert.alert(index+" "+info.title);
  }

  keyExtractor(item){
    return item.id;
  }

  requestRecommend(){
    fetch(Api.recommend)
    .then(response => response.json())
    .then(responseData =>{
      this.setState({
        dataArray : responseData.data,
        refreshing: false
      })
    })
    .catch((error) => {
      this.setState({refreshing: false})
    });
  }

  requestDiscount(){
    fetch(Api.discount)
    .then(response => response.json())
    .then(responseData =>{
      this.setState({
        discounts:Api.gridInfo
      })
    })
  }
}

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
    width: 300
  },
  searchBar: {
    width: Screen.width * 0.6,
    height: 30,
    borderRadius: 19,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    alignSelf: 'center',
    opacity:0.6
},
searchIcon: {
    width: 20,
    height: 20,
    margin: 5,
}

});


const HomeNavigator = createStackNavigator({
  Home:{
    screen:Home
  },
});

const App = createAppContainer(HomeNavigator);

export default App;
