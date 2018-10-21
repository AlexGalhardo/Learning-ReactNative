import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Exemplo 1
 * 
 export default class GalhardoApp extends React.Component {
  
    render() {

        return (
            <View style={{flex:1, backgroundColor:'black'}}>
                <Text>Este é um texto qualquer.</Text>
                <View style={{width:50, height:300, backgroundColor:'green'}}></View>
                <View style={{width:100, height:100, backgroundColor:'red'}}></View>
                <View style={{width:200, height:200, backgroundColor:'blue'}}></View>
            </View>
        );
    }
}
*/

export default class GalhardoApp extends React.Component {
  
    render() {

        return (
            <View style={{flex:1, backgroundColor:'black'}}>
                <View style={{flex:1, backgroundColor:'green'}}></View>
                <View style={{flex:1, backgroundColor:'red'}}></View>
                <View style={{flex:1, backgroundColor:'blue'}}></View>
                <View style={{flex:1, backgroundColor:'pink'}}></View>
            </View>
        );
    }
}