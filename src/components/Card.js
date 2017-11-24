import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
} from 'react-native'


export default class Card extends Component {

	render() {
		let { title, description } = this.props
		return (
			<View style={styles.container}>
				<Text style={styles.titleText}>{title}</Text>
				<Text style={styles.titleText}>{description}</Text>
			</View>
		)
	}



}

const styles = StyleSheet.create({
	container: {
		height: 100,
		backgroundColor: '#fff',
		padding: 10,
		
	},
	titleText: {
		fontFamily: 'Boogaloo',
		fontSize: 20,
		color: '#000',		
	},	
	descriptionText: {
		fontFamily: 'Boogaloo',
		fontSize: 18,
		color: '#000',		
	}	
})   

