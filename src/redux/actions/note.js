import * as types from '../types'

export function loadNote(notes){
	return {
		type: types.LOAD_STORED,
		payload: notes
	}
}

export function addNote(newNote) {
	return {
		type: types.ADD_NOTE,
		payload: newNote
	}
}

export function updateNote(updatedNote) {
	return {
		type: types.UPDATE_NOTE,
		payload: updatedNote
	}
}

export function deleteNote(noteId) {
	return {
		type: types.DELETE_NOTE,
		payload: noteId
	}
}