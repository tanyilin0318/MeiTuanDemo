import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  Text
} from 'react-native';

import RefreshListView,{RefreshState} from 'react-native-scrollable-tab-view';
import Api from '../../main/Api';
import Cell from '../../Widget/Cell';

type Props ={
  types:Array<string>,
  navigation:any
}

type State={
  typeIndex:number,
  data:Array<Object>,
  refreshState: number,
}

export default class NearByList extends Component<Props,State> {
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
    return(
      <Cell
      info={item} onPress={()=>{
        console.log(item.item.title);
      }}/>
    );
  }

  render() {
    return (
      <FlatList
        data= {this.state.data}
        renderItem = {({item,index}) => this.renderItem(item,index)}
        keyExtractor={(item)=>item.id}
      />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
