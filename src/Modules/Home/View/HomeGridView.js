import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

import GridItem from './HomeGridItem';

type Props={
  infos:Array<object>,
  OnGridSelected:Function,
}

export default class HomeGridView extends Component<Props>{

  render() {
    let GridViews = this.props.infos.map((info, index) => (
                <GridItem
                    info={info}
                    key={index}
                    onPress={() => {
                      this.props.OnGridSelected(index,info)
                    }}
                />
            ));

    return (
      <View style = {styles.container}>
        {GridViews}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
