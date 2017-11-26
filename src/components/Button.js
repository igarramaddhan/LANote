
/**
 * Generated With Arch CLI
 * https://github.com/Archipelcorp/archrn-cli
 * @flow
 */


import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from 'react-native'


export default class Button extends Component<{}> {

	render() {
		const { title } = this.props
		return (
			<TouchableOpacity {...this.props}>
				<View style={styles.container}>
					<Text style={styles.text}>{title}</Text>
				</View>
			</TouchableOpacity>
		)
	}



}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#1e90ff',
		borderRadius: 5,
		margin: 3,
		elevation: 3
	},
	text: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		fontFamily: 'Boogaloo',
		color: '#fff'
	},
})    
