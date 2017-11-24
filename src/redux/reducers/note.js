const initialAuthState = { notes: [] }

import _ from 'lodash'

export function notesReducer(state = initialAuthState, action) {
	switch (action.type) {
	case 'AddNote': {
		const newNote = Object.assign({}, { id: state.notes.length }, action.payload)
		const newState = [newNote, ...state.notes]
		return { ...state, notes: newState }
	}
	case 'UpdateNote': {
		const newArray = _.remove(state.notes, (data) => {
			return data.id != action.payload.id
		})
		const updatedNote = Object.assign({}, { id: newArray.length }, action.payload)
		const updatedState = [updatedNote, ...newArray]
		return { ...state, notes: updatedState }
	}
	case 'DeleteNote': {
		const deletedNewArray = _.remove(state, (data) => {
			return data.id != action.payload
		})
		return { ...state, notes: deletedNewArray }
	}
	default:
		return state
	}
}