import createReducer from '../../lib/createReducer'
import * as types from '../types'
import { AsyncStorage } from 'react-native'
import moment from 'moment'

const initialNoteState = { notes: [] }

import _ from 'lodash'

export const notesReducer = createReducer(initialNoteState, {
	[types.LOAD_STORED](state, action) {
		let notes = action.payload != null ? { ...state, notes: JSON.parse(action.payload) } : state
		return notes
	},
	[types.ADD_NOTE](state, action) {
		const newNote = Object.assign({}, {
			id: state.notes.length,
			date: moment().format('DD-MM-YYYY hh:mm')
		}, action.payload)
		let notes = []
		state.notes.map((item, index) => {
			notes.push({
				id: index,
				title: item.title,
				description: item.description,
				date: item.date
			})
		})
		const newState = [newNote, ...notes]
		AsyncStorage.setItem('notes', JSON.stringify(newState))
		return { ...state, notes: newState } || state
	},
	[types.UPDATE_NOTE](state, action) {
		const newArray = _.remove(state.notes, (data) => {
			return data.id != action.payload.id
		})
		let notes = []
		newArray.map((item, index) => {
			notes.push({
				id: index,
				title: item.title,
				description: item.description,
				date: item.date
			})
		})
		const updatedNote = Object.assign({}, {
			id: notes.length,
			date: moment().format('DD-MM-YYYY hh:mm'),
			title: action.payload.title,
			description: action.payload.description
		})
		const updatedState = [updatedNote, ...notes]
		AsyncStorage.setItem('notes', JSON.stringify(updatedState))
		return { ...state, notes: updatedState } || state
	},
	[types.DELETE_NOTE](state, action) {
		const deletedNewArray = _.remove(state.notes, (data) => {
			return data.id != action.payload
		})
		AsyncStorage.setItem('notes', JSON.stringify(deletedNewArray))
		return { ...state, notes: deletedNewArray } || state
	}
})