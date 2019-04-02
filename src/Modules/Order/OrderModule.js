import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { createStackNavigator,createAppContainer,createBottomTabNavigator } from 'react-navigation';
import Cell from '../../Widget/Cell';
import Api from '../../main/Api';
import OrderMenuItem from './OrderMenuItem';

class Order extends Component<Props,State> {

  static navigationOptions = (navigation:any)=>({
    headerTitle:(
      <TouchableOpacity>
        <Text>订单</Text>
      </TouchableOpacity>
    ),
  })

  constructor(props) {
    super(props)
    this.state = {
      data:[]
    }
  }

  componentDidMount(){
    this.requestRecom();
  }

  requestRecom(){
    fetch(Api.recommend)
    .then(response => response.json())
    .then(responseData=>{
      let dataList = responseData.data;
      dataList.sort(() => {return 0.5 - Math.random()})
      console.log(dataList);
      this.setState({
        data:dataList
      })
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  renderItem(item,index){

      if (index == 3) {
        return(
          <Text>xinijijlafd</Text>
        );
      } else {
        return(
          <Cell info={item} onPress={()=>{
            console.log(item.item.title);
          }}/>
        );
      }

  }

  renderHeader(){
    return(
      <View >
        <View style = {styles.myOrder}>
          <Text style={{marginLeft: 10}}>我的订单</Text>
          <View style = {styles.rightView}>
            <Text >全部订单</Text>
            <Image source={require('../../img/public/cell_arrow.png')} style = {styles.rightImg}/>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <OrderMenuItem title='待付款' icon={require('../../img/order/order_tab_need_pay.png')} />
          <OrderMenuItem title='待使用' icon={require('../../img/order/order_tab_need_use.png')} />
          <OrderMenuItem title='待评价' icon={require('../../img/order/order_tab_need_review.png')} />
          <OrderMenuItem title='退款/售后' icon={require('../../img/order/order_tab_needoffer_aftersale.png')} />
        </View>
        <View style={{backgroundColor: '#f5f5f5',height: 20}}>

        </View>
        <View style = {styles.myOrder}>
          <Text style={{marginLeft: 10}}>我的收藏</Text>
          <View style = {styles.rightView}>
            <Text style={{color: '#333333'}}>查看全部</Text>
            <Image source={require('../../img/public/cell_arrow.png')} style = {styles.rightImg}/>
          </View>
        </View>
      </View>

    );
  }

  render() {
    return (
      <FlatList
        data= {this.state.data}
        renderItem = {({item,index}) => this.renderItem(item,index)}
        ListHeaderComponent = {this.renderHeader}
        keyExtractor = {(item)=>item.id}
      />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  myOrder:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
    height: 44
  },
  itemContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightView:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  rightImg:{
    width: 10,
    height: 15,
    margin: 5
  }
});

const OrderNavigator = createStackNavigator({
  Order:{
    screen:Order
  },
});

const App = createAppContainer(OrderNavigator);

export default App;
