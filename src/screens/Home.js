import React, { Component } from 'react'
import {
	StyleSheet,
	View,
	FlatList,
	StatusBar,
	Text,
	AsyncStorage,
} from 'react-native'

import Card from '../components/Card'
import Button from '../components/Button'

export default class Home extends Component<{}> {


	async componentWillMount() {
		try {
			let notes = await AsyncStorage.getItem('notes')
			this.props.navigation.loadNote(notes)
		} catch (error) {
			console.log(error)
		}
	}
	render() {
		return (
			<View style={styles.container}>
				<StatusBar translucent barStyle='dark-content' backgroundColor='#fff' />
				<FlatList
					data={this.props.screenProps.notes}
					renderItem={({ item }) => {
						return (
							<Card
								title={item.title}
								description={item.description}
								date={item.date}
								onDeleteNote={() => this.props.navigation.deleteNote(item.id)}
								onEditNote={() => this.props.navigation.openPage('Update', {
									id: item.id,
									title: item.title,
									description: item.description
								})}
							/>
						)
					}
					}
					keyExtractor={(item) => item.id}
				/>
				<Button onPress={() => {
					this.props.navigation.openPage('Add', { test: 'lol' })
				}} title='Add' />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#F5F5F5',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
})    
