import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class GalhardoApp extends React.Component {
  
    render() {

        return (
            
            <View style={styles.padrao}>
                <Text style={styles.azulGrande}>Esse é o texto 1</Text>
                <Text style={styles.vermelho}>Esse é o texto 2</Text>
                <Text style={[styles.azulGrande, styles.vermelho]}>Esse é o texto 3</Text>
                <Text style={[styles.vermelho, styles.azulGrande]}>Esse é o texto 4</Text>
                <Text>Esse é o texto 5</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    padrao: {
        paddingTop: 20,
        backgroundColor: '#00FF00'
    },
    azulGrande: {
        color:'blue',
        fontSize:30,
        textAlign: 'center'
    },
    vermelho: {
        color: 'red',
        fontSize: 15
    }
});

