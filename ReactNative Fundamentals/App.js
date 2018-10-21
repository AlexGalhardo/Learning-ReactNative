import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class GalhardoApp extends React.Component {
  
    render() {

        return (
            <View style={{flex:1}}>
              <View style={{ flex:1
                          , flexDirection:'row'
                          , justifyContent:'flex-end'
                          , alignItems:'flex-start'
                          , backgroundColor:'lightgray'}
                          }>
                  <View style={{width:100, height:100, backgroundColor:'blue'}}></View>
              </View>
              <View style={{ flex:1
                          , flexDirection:'column'
                          , justifyContent:'flex-end'
                          , alignItems:'flex-start'
                          , backgroundColor:'cyan'}
                          }>
                  <View style={{width:100, height:100, backgroundColor:'red'}}></View>
              </View>
          </View>
        );
    }
}