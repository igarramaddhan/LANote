import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Modal,
	TouchableWithoutFeedback,
	TouchableNativeFeedback
} from 'react-native'

import metrics from '../lib/metrics'

export default class Card extends Component {
	constructor(props) {
		super(props)
		this.state = {
			menuVisible: false,
			expand: false
		}
	}
	renderMenu() {
		return (
			<Modal
				transparent={true}
				visible={this.state.menuVisible}
				onRequestClose={() => this.setState({ menuVisible: false })}
				animationType='slide'
			>
				<TouchableWithoutFeedback onPress={() => this.setState({ menuVisible: false })}>
					<View style={styles.popUpBlackLayer}>
						<TouchableWithoutFeedback>
							<View style={styles.popUpMainLayer}>
								<TouchableOpacity onPress={() => {
									this.setState({ menuVisible: false })
									this.props.onEditNote()
								}}>
									<View style={styles.menuItem}>
										<Text style={styles.menuText}>Edit</Text>
									</View>
								</TouchableOpacity>
								<TouchableOpacity onPress={() => this.props.onDeleteNote()}>
									<View style={[styles.menuItem, {
										backgroundColor: '#fd3b3b',
										borderBottomLeftRadius: 5,
										borderBottomRightRadius: 5
									}]}>
										<Text style={[styles.menuText, { color: '#fff' }]}>Delete</Text>
									</View>
								</TouchableOpacity>
							</View>
						</TouchableWithoutFeedback>
					</View>
				</TouchableWithoutFeedback>
			</Modal>
		)
	}

	render() {
		let { title, description, date } = this.props
		return (
			<TouchableNativeFeedback
				onPress={() => this.setState({ expand: !this.state.expand })}
				onLongPress={() => this.setState({ menuVisible: true })}>
				<View style={styles.container}>
					<Text style={styles.dateText}>{date}</Text>
					<View>
						<Text style={styles.titleText}>{title}</Text>
					</View>
					<View style={{ margin: 5 }}>
						<Text style={styles.descriptionText}>{this.state.expand && description}</Text>
					</View>
					{this.renderMenu()}
				</View>
			</TouchableNativeFeedback>
		)
	}



}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		padding: 20,
		margin: 10,
		borderRadius: 5,
		elevation: 2
	},
	titleText: {
		fontFamily: 'LibreBaskerville-Italic',
		fontSize: 25,
		color: '#000',
	},
	descriptionText: {
		fontFamily: 'Boogaloo',
		fontSize: 16,
		color: '#000',
	},
	dateText: {
		fontFamily: 'Boogaloo',
		fontSize: 15,
		alignSelf: 'flex-end',
		color: 'red'
	},
	popUpBlackLayer: {
		flex: 1,
		alignItems: 'center'
	},
	popUpMainLayer: {
		position: 'absolute',
		elevation: 4,
		width: metrics.WIDTH - 5,
		backgroundColor: '#1e90ff',
		borderRadius: 5,
		bottom: 3
	},
	menuItem: {
		width: metrics.WIDTH - 5,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center'
	},
	menuText: {
		fontFamily: 'Boogaloo',
		fontSize: 20,
		color: '#fff'
	}
})

