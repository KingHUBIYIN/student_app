'use strict'
var React = require('react');
var {
  View,
  Text,
  Navigator,
  StyleSheet
} = require('react-native');
var system = require('../base/system-container');
var {SystemContainer} = system;

var WrongBookView = React.createClass({
    render() {
        return (
            <SystemContainer>
                {this.props.children}
            </SystemContainer>  
        )
    }
});

module.exports = WrongBookView;