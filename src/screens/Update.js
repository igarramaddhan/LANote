import React, { Component } from 'react'
import {
	Platform,
	StyleSheet,
	Text,
	View,
	TextInput,
	StatusBar
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Button from '../components/Button'

export default class Update extends Component<{}> {
	static navigationOptions = {
		headerRight:
			<View style={{padding: 20, justifyContent: 'center', alignItems: 'center'}}>
				<Icon name='check' size={25} color='#fff' />
			</View>
	}
	constructor() {
		super()
		this.state = {
			id: '',
			title: '',
			desc: ''
		}
		this.focusNextField = this.focusNextField.bind(this)
		this.inputs = {}
	}
	componentWillMount() {
		const { id, title, description } = this.props.navigation.state.params
		this.setState({
			id: id,
			title: title,
			desc: description
		})
	}
	updateNote() {
		this.props.navigation.updateNote({
			id: this.state.id,
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
				<StatusBar translucent barStyle='dark-content' backgroundColor='#fff' />
				<View style={styles.textInputContainer}>
					<View style={styles.inputBox}>
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
					</View>
					<View style={[styles.inputBox, { flex: 5 }]}>
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
					</View>
					<Button
						title='UPDATE'
						onPress={() => {
							this.updateNote()
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
		backgroundColor: '#F5F5F5',
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
	},
	inputBox: {
		padding: 10,
		elevation: 2,
		borderRadius: 5,
		backgroundColor: '#fff',
		margin: 10
	}
})    
