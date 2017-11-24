import React, { Component } from 'react'
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Button,
	FlatList
} from 'react-native'

import Card from '../components/Card'

export default class Home extends Component<{}> {

	render() {
		return (
			<View style={styles.container}>
				<FlatList
					data={this.props.screenProps.notes}
					renderItem={({ item }) => <Card
						title={item.title}
						description={item.description} />}
					keyExtractor={(item) => item.id}
				/>
				<Button onPress={() => {
					this.props.navigation.openPage('Add', { test: 'lol' })
				}} title='Add' />
				<Button onPress={() => {
					console.log(this.props)
				}} title='Check' />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
})    
