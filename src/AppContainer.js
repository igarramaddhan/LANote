import React, { Component } from 'react'
import { Text, View, BackHandler } from 'react-native'
import { NavigationActions, addNavigationHelpers } from 'react-navigation'

import Route from './routes'
import { bindActionCreators } from 'redux'
import ActionCreator from './redux/actions'
import { connect } from 'react-redux'

class AppContainer extends Component {
	constructor(props) {
		super(props)
		this.onBackPress = this.onBackPress.bind(this)
		this.navHelp = {}
	}

	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
	}

	isRootScreen(navigator) {
		if (navigator.index == null) {
			return true
		}

		if (navigator.index > 0) {
			return false
		}

		return !navigator.routes || !navigator.routes.find(route => !this.isRootScreen(route))
	}

	onBackPress() {
		const { dispatch, nav } = this.props
		if (this.isRootScreen(nav)) return false
		dispatch(NavigationActions.back())
		return true
	}

	render() {
		return (
			<Route
				navigation={addNavigationHelpers({
					dispatch: this.props.dispatch,
					state: this.props.nav,
					...bindActionCreators(ActionCreator, this.props.dispatch)
				})}
				screenProps={{
					...this.props
				}}
			/>
		)
	}
}

const mapStateToProps = state => ({
	nav: state.nav,
	notes: state.notesReducer.notes
})

export default connect(mapStateToProps)(AppContainer)