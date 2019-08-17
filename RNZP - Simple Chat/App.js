import React, { Component } from 'react';
import { View, Platform, StyleSheet, FlatList, ImageBackground } from 'react-native';
import MsgItem from './src/MsgItem';

export default class PrimeiroProjeto extends Component {

	constructor(props) {
		super(props);
		this.state = {
			chat:[
				{key:'1', nome:'Galhardo', msg:'Ow seu bosta', m:true},
				{key:'2', nome:'Xandyh', msg:'fala bosta 2?', m:false},
				{key:'3', nome:'Xandyh', msg:'cita', m:false},
				{key:'4', nome:'Galhardo', msg:'foi pra festa do thiago carai?', m:true},
				{key:'5', nome:'Xandyh', msg:'LÓGICO fi, várias minas, peguei 3', m:false},
				{key:'6', nome:'Galhardo', msg:'ai sim', m:true},
				{key:'7', nome:'Galhardo', msg:'pego quem?', m:true},
				{key:'8', nome:'Xandyh', msg:'ah, as mesma de sempre', m:false},
				{key:'9', nome:'Xandyh', msg:'ta lgd né', m:false}
			]
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<ImageBackground source={require('./assets/images/bg.jpg')} style={styles.chat}>
					<FlatList
						data={this.state.chat}
						renderItem={({item})=> <MsgItem data={item} />}
					/>
				</ImageBackground>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		flex:1,
		marginTop:(Platform.OS=='ios') ? 20 : 0
	},
	chat:{
		flex:1
	}
});




