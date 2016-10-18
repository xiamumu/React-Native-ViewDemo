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
  View,
  TouchableOpacity,
    AlertIOS
} from 'react-native';

/**-------------------------第一个示例程序---------------------------**/
class BViewDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text style={{backgroundColor: 'red', height: 30}}>第一个</Text>
          <Text style={{backgroundColor: 'green', height: 40}}>第二个</Text>
          <Text style={{backgroundColor: 'blue', height: 50}}>第三个</Text>
          <Text style={{backgroundColor: 'yellow', height: 60}}>第四个</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
          // flex: 1,
        backgroundColor: 'purple',
        // 上边距
        marginTop: 50,
        // 改变主轴的方向
        flexDirection: 'row',
        // 设置主轴的对齐方式 flex-start, flex-end, space-around, space-between
        justifyContent: 'space-around',
        // 设置侧轴的对齐方式  flex-end, flex-start, center, stretch
        alignItems: 'stretch',
    },
});

/**-------------------------第二个示例程序---------------------------**/
class BViewDemo1 extends Component {
    render() {
        return (
            <View style={styles1.container}>
                <Text style={{backgroundColor: 'red', width: 80}}>第一个</Text>
                <Text style={{backgroundColor: 'green', width: 100}}>第二个</Text>
                <Text style={{backgroundColor: 'blue', width: 120}}>第三个</Text>
                <Text style={{backgroundColor: 'yellow', width: 140}}>第四个</Text>
            </View>
        );
    }
}

const styles1 = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'purple',
        // 上边距
        marginTop: 50,
        // 改变主轴的方向
        flexDirection: 'row',
        // 设置主轴的对齐方式 flex-start, flex-end, space-around, space-between
        justifyContent: 'flex-start',
        // 设置侧轴的对齐方式  flex-end, flex-start, center, stretch
        alignItems: 'center',
        // 换行  wrap, nowrap, wrap-reverse
        flexWrap: 'wrap',
    },
});


/**-------------------------第三个示例程序---------------------------**/
class BViewDemo2 extends Component {
    render() {
        return (
            <View style={styles2.container}>
                <Text style={{backgroundColor: 'red', flex:1, height: 60, alignSelf: 'flex-start'}}>第一个</Text>
                <Text style={{backgroundColor: 'green', flex:2, height: 70, alignSelf: 'flex-end'}}>第二个</Text>
                <Text style={{backgroundColor: 'blue', flex:3, height: 80}}>第三个</Text>
                <Text style={{backgroundColor: 'yellow', flex:3, height: 90}}>第四个</Text>
            </View>
        );
    }
}

const styles2 = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'purple',
        // 上边距
        marginTop: 50,
        // 改变主轴的方向
        flexDirection: 'row',
        // 设置主轴的对齐方式 flex-start, flex-end, space-around, space-between
        justifyContent: 'flex-start',
        // 设置侧轴的对齐方式  flex-end, flex-start, center, stretch
        alignItems: 'center',
    },
});

/**-------------------------第四个示例程序---------------------------**/

// 引入
var Dimensions = require('Dimensions');

class BViewDemo3 extends Component {
    render() {
        return (
            <View style={styles3.outViewStyle}>
                <Text>当前屏幕的宽度:{Dimensions.get('window').width}</Text>
                <Text>当前屏幕的高度:{Dimensions.get('window').height}</Text>
                <Text>当前屏幕的分辨率:{Dimensions.get('window').scale}</Text>
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
    }
});


/**-------------------------第五个示例程序---------------------------**/

var BViewDemo4 = React.createClass({

    // 设置不可改变的值
    getDefaultProps(){
        return {
            age: 18
        }
    },

    getInitialState(){
        return {
            title: '不透明触摸',
            person: '张三'

        }
    },

    render() {
        return (
            <View ref="topView" style={styles4.container}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={()=>this.activeEvent('点击')}
                    onPressIn={()=>this.activeEvent('按下')}
                    onPressOut={()=>this.activeEvent('抬起')}
                    onLongPress={()=>this.activeEvent('长按')}
                >
                    <View ref="eventText" style={styles4.innerViewStyle}>
                        <Text>常用的事件</Text>
                    </View>
                </TouchableOpacity>
                <View>
                    <Text>{this.state.title}</Text>
                    <Text>{this.state.person}</Text>
                    <Text>{this.props.age}</Text>
                </View>
            </View>
        );
    },
    activeEvent(event){
        this.setState({
            title: event,
            person: '李四'
        })
        // 拿到主View
        this.refs.topView
        this.refs.eventText

    }



});


const styles4 = StyleSheet.create({
    container: {
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

AppRegistry.registerComponent('BViewDemo', () => BViewDemo4);
