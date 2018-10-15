import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';

/**
 * <Image source={imagemFavicon} style={{width:300, height:300}}/>
 */

/**
 * Criando componente
 */
class Imagem extends Component {

    render(){

        let imagem = {
            uri:'https://galhardoo.com/wp-content/themes/galhardoo.com/images/'+this.props.nome+'.png'
        };

        return (

            <Image source={imagem} style={{width:parseInt(this.props.largura), height:parseInt(this.props.altura)}} />

        );
    }
}

export default class GalhardoApp extends React.Component {
  
    somar(n1, n2){
        return n1+n2;
    }

    render() {

        let nomeRegina = "Regina Galhardo";
        let imagemRegina = {
            uri:'https://scontent.fqsc1-1.fna.fbcdn.net/v/t1.0-1/p160x160/42374673_108229276812653_1780325658577076224_n.jpg?_nc_cat=111&oh=f8bf5b88d84c5fc928c94edf3c6043e0&oe=5C44B837'
        };
        let nomeXande = 'Xandyh';
        let imagemFavicon = {
            uri:'https://galhardoo.com/wp-content/themes/galhardoo.com/images/favicon.png'
        };

        return (
            
            <View>
                
                <Text>espaço 1</Text>
                
                <Text>espaço 2</Text>
                
                <Text>espaço 3</Text>
                
                <Text></Text>
                
                <Text>Ola mundo!</Text>
                
                <Text> Mandando print pro {`${nomeRegina}`}</Text>
                
                <Text style={{fontSize:25, color:'red', margin:20}}>A soma de 2+2 é {this.somar(2, 2)}</Text>
                
                <Imagem nome='favicon' largura='50' altura='50'/>

                <Button title="Aperte" onPress={()=>{
                    alert("Me apertou");
                }} />
            </View>
        );
    }
}

