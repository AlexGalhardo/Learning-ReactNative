import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';

/**
 * States são informações que mudam
 *
 * Props são informãções estáticas, que não mudam
 */

class Janta extends Component {

    constructor(props){

        super(props);
    
        this.state = {comida:props.comida};
        var comidas = ['Pizza', 'Lasanha', 'Sopa', 'Arroz'];
        
        setInterval(()=> {

            this.setState(previousState => {
                var n = Math.floor(Math.random() * comidas.length);
            
                return {comida: comidas[n]};
            });

        }, 1000);
    }   

    render(){

        return (
            <View>
                <Text style={{textAlign:'center', fontWeight:'bold', fontSize:20, color:'red'}}>Hoje você vai jantar:</Text>
                <Text style={{textAlign:'center', fontSize:15}}>{this.state.comida}</Text>
            </View>
        );
    }
}

export default class GalhardoApp extends React.Component {
  
    render() {

        return (
            
            <View style={{paddingTop:20}}>
                <Text>Texto de exemplo</Text>
                <Janta comida='Bolacha' />
            </View>
        );
    }
}

