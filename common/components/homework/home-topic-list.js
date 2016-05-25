'use strict'
var React = require('react');
var {
    Text,
    View,
    Navigator
} = require('react-native')
var Dimensions = require('../base/react-native-dimensions');
var {Link,History} = require('../base/react-native-router');
var TabBars = require('../base/tabbars');
var {ContentContainer} = require('../base/system-container')
var ToolBar = require('../base/react-native-toolbar');

var SystemStore = require('../../stores/system-store');
var {EventTypes} = require('../../constants/system-constants');

var HomeListView = React.createClass({
    render:function(){
        return (<ContentContainer>
                        <ToolBar navIcon={{}} logo={{icon:require('../../images/logo.png')}} title="我的作业" subtitle="" actions={[]}></ToolBar>
                        <View>
								<Text>{"This is 'HomeWork Topic List Page'"}</Text>		
						</View>   
                        <TabBars name="/home/index"></TabBars>
                </ContentContainer>)
    }
})

module.exports = HomeListView;