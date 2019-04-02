import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  SectionList,
  TouchableOpacity
} from 'react-native';
import { createStackNavigator,createAppContainer,createBottomTabNavigator } from 'react-navigation';
import NavigationItem from '../../Widget/NavigatorItem';
import Color from '../../common/Colors';
class Mine extends Component{

  static navigationOptions = (navigation:any) => ({
    title:'我的' ,
    headerRight:(
      <View style={{flexDirection: 'row'}}>
        <NavigationItem
          icon={require('../../img/mine/icon_navigation_item_set_white.png')}
        />
        <NavigationItem
          icon={require('../../img/mine/icon_navigation_item_message_white.png')}
        />
      </View>
    ),
    headerStyle: {
            backgroundColor: Color.primary,
            elevation: 0,
            borderBottomWidth: 0,
        },
  })

  constructor(props) {
     super(props);
    this.state = {
      text:''
    };
  }

  getDataList() {
    return (
        [
            {key:'A',data:[
                {title: '我的钱包', subtitle: '办信用卡', image: require('../../img/mine/icon_mine_wallet.png')},
                {title: '余额', subtitle: '￥95872385', image: require('../../img/mine/icon_mine_balance.png')},
                {title: '抵用券', subtitle: '63', image: require('../../img/mine/icon_mine_voucher.png')},
                {title: '会员卡', subtitle: '2', image: require('../../img/mine/icon_mine_membercard.png')}
            ]},
            {key:'A',data:[
                {title: '好友去哪', image: require('../../img/mine/icon_mine_friends.png')},
                {title: '我的评价', image: require('../../img/mine/icon_mine_comment.png')},
                {title: '我的收藏', image: require('../../img/mine/icon_mine_collection.png')},
                {title: '会员中心', subtitle: 'v15', image: require('../../img/mine/icon_mine_membercenter.png')},
                {title: '积分商城', subtitle: '好礼已上线', image: require('../../img/mine/icon_mine_member.png')}
            ]},
            {key:'A',data:[
                {title: '客服中心', image: require('../../img/mine/icon_mine_customerService.png')},
                {title: '关于美团', subtitle: '我要合作', image: require('../../img/mine/icon_mine_aboutmeituan.png')}
            ]}
        ]
    )
  }

 _sectionComp = (info) => {
   var txt = info.section.key;
   return <Text
     style={{ height: 20, textAlign: 'center', textAlignVertical: 'center', backgroundColor: '#f5f5f5', color: 'gray', fontSize: 30 }}></Text>
 }

 ListHeader(){
   return(
     <View style = {styles.headerV}>
       <Image source={require('../../img/mine/avatar.png')} style ={styles.headerImg}/>
       <View>
         <Text>宿敌</Text>
         <Text>个人信息></Text>
       </View>
     </View>
   );
 }

 render() {


   return (
       <SectionList
         renderSectionHeader={this._sectionComp}
         renderItem={(item,index)=>this.renderItem(item,index)}
         sections={this.getDataList()}
         keyExtractor = {(item,index)=>{console.log(item);}}
         ListHeaderComponent = {()=>this.ListHeader()}
       />
   );
 }



  renderItem(item,index){
    console.log(item.count);
    return(
      <TouchableOpacity style={styles.container}>
        <View style ={{flexDirection: 'row',alignItems: 'center'}}>
          <Image source={item.item.image} style = {styles.icon}/>
          <Text style = {styles.title}>{item.item.title}</Text>
        </View>
        <View style = {{flexDirection: 'row',alignItems: 'center',justifyContent: 'flex-end'}}>
          <Text style = {styles.subTitle}>{item.item.subtitle}</Text>
          <Image source={require('../../img/public/cell_arrow.png')} style = {styles.rightImg}/>
        </View>

      </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5'
  },
  icon:{
    width: 30,
    height: 30,
    marginLeft: 15,
  },
  title:{
    fontSize: 14,
    marginLeft: 10
  },
  subTitle:{
    color:'#51D3C6',
    fontSize: 12,
    justifyContent: 'flex-end'
  },
  rightImg:{
    width: 14,
    height: 14,
    marginRight: 10
  },
  headerV:{
    alignItems: 'center',
    flexDirection: 'row',
    height: 150,
    backgroundColor: Color.primary
  },
  headerImg:{
    width: 50,
    height: 50,
    margin: 5,
    borderRadius: 25,
  },

});

const MineN = createStackNavigator({
  Mine:{
    screen:Mine
  }
});

export default createAppContainer(MineN);
