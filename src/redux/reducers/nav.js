import Route from '../../routes'
import createReducer from '../../lib/createReducer'
import * as types from '../types'

const initialState = Route.router.getStateForAction(Route.router.getActionForPathAndParams('Home'))

export const nav = createReducer(initialState, {
	[types.NAV](state, action) {
		const nextState = Route.router.getStateForAction(action, state)
		return nextState || state
	},
	[types.NAV_BACK](state, action) {
		const nextState = Route.router.getStateForAction(action, state)
		return nextState || state
	},
	[types.NAV_RESET](state, action) {
		const nextState = Route.router.getStateForAction(action, state)
		return nextState || state
	},
	[types.SET_PARAMS](state, action) {
		const nextState = Route.router.getStateForAction(action, state)
		return nextState || state
	},
})

