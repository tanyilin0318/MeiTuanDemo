/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';

type Props = {
    stateTextStyle: String,
    stateBackgroundColor: String,
    leftComponent: Component,
    centerComponent: Component,
    rightComponent: Component,
    backgroundColor: Component,
};
export default class Header extends Component<Props> {
    render() {
        let {stateTextStyle, stateBackgroundColor, leftComponent, centerComponent, rightComponent, backgroundColor} = this.props;
        stateTextStyle = stateTextStyle == null ? 'dark-content' : stateTextStyle;
        stateBackgroundColor = stateBackgroundColor == null ? '#FFFFFF' : stateBackgroundColor;
        leftComponent = leftComponent == null ?
            <Image source={require('./img/return.png')} style={styles.img}/> : leftComponent;
        rightComponent = rightComponent == null ?
            <Image source={require('./img/submit.png')} style={styles.img}/> : rightComponent;
        centerComponent = centerComponent == null ? <Text style={styles.text}>首页</Text> : centerComponent;
        backgroundColor = backgroundColor == null ? '#FFFFFF' : backgroundColor;
        return (
            <View style={[styles.container, backgroundColor = {backgroundColor}]}>
                <StatusBar backgroundColor={stateBackgroundColor}
                           barStyle={stateTextStyle}/>
                <View style={styles.header}>
                    {leftComponent}
                    {centerComponent}
                    {rightComponent}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: '#FFFFFF'
    },
    header: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        marginLeft: 12,
        marginRight: 12,
    },
    img: {
        height: 26,
        width:26,
    },
    text:{
        fontWeight: 'bold',
        fontSize:20,
    }
});
