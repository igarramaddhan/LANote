import React, { Component } from 'react'
import {
	Platform,
	StyleSheet,
	Text,
	View,
	Button,
	TextInput
} from 'react-native'


export default class Add extends Component<{}> {
	constructor() {
		super()
		this.state = {
			title: '',
			desc: ''
		}
		this.focusNextField = this.focusNextField.bind(this)
		this.inputs = {}
	}

	addNote() {
		this.props.navigation.addNote({
			title: this.state.title,
			description: this.state.desc
		})
		this.props.navigation.back()
	}
	focusNextField(key) {
		this.inputs[key].focus()
	}

	render() {
		return (
			<View style={styles.container}>

				<View style={styles.textInputContainer}>
					<TextInput
						style={styles.inputTitleStyle}
						autoFocus={true}
						placeholder='Note Title...'
						placeholderTextColor='#aaa'
						returnKeyType='next'
						underlineColorAndroid="transparent"
						onChangeText={(text) => this.setState({ title: text })}
						value={this.state.title}
						onSubmitEditing={() => {
							this.focusNextField('note')
						}}
					/>

					<TextInput
						style={styles.inputDescriptionStyle}
						multiline={true}
						placeholder='Note Description...'
						placeholderTextColor='#aaa'
						returnKeyType='done'
						underlineColorAndroid="transparent"
						onChangeText={(text) => this.setState({ desc: text })}
						value={this.state.desc}
						ref={input => {
							this.inputs['note'] = input
						}}
					/>
					<Button
						title='ADD'
						onPress={() => {
							this.addNote()
						}}
					/>
				</View>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#fff',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	textInputContainer: {
		flex: 1
	},
	inputTitleStyle: {
		height: 60,
		paddingTop: 5,
		paddingLeft: 20,
		paddingRight: 20,
		paddingBottom: 0,
		fontFamily: 'Boogaloo',
		fontSize: 20
	},
	inputDescriptionStyle: {
		flex: 1,
		paddingLeft: 20,
		paddingRight: 20,
		marginBottom: 60,
		fontFamily: 'Boogaloo',
		fontSize: 16,
		textAlignVertical: 'top'
	}
})    
