/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

// 引入
// var Dimensions = require('Dimensions');

class BViewDemo3 extends Component {
    render() {
        return (
            <View style={styles3.outViewStyle}>
                <View style={styles3.innerViewStyle}>
                    <Text>我是文本，但可以点击</Text>
                </View>
            </View>
        );
    }
}

const styles3 = StyleSheet.create({
    outViewStyle: {
        // 占满屏幕
        flex: 1,
        // 主轴方向居中
        justifyContent: 'center',
        // 侧轴方向居中
        alignItems: 'center',
        // 背景颜色
        backgroundColor: 'orange',
    },
    innerViewStyle:{
        backgroundColor: 'red',
    }
});

AppRegistry.registerComponent('BViewDemo', () => BViewDemo3);

