import { NavigationActions } from 'react-navigation'
import * as types from '../types'

export const nav = (state, action) => ({
	type: types.NAV,
	state,
	action
})

export function back() {
	return dispatch => dispatch(NavigationActions.back())
}

export function resetToPage(routeName, params = {}) {
	return dispatch =>
		dispatch(NavigationActions.reset({
			index: 0,
			key: null,
			actions: [NavigationActions.navigate({ routeName, params })]
		}))
}

export function openPage(routeName, params = {}) {
	return dispatch => dispatch(NavigationActions.navigate({ routeName, params }))
}


