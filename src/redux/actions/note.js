export function addNote(newNote) {
	return {
		type: 'AddNote',
		payload: newNote
	}
}

export function updateNote(updatedNote) {
	return {
		type: 'UpdateNote',
		payload: updatedNote
	}
}

export function deleteNote(noteId) {
	return {
		type: 'DeleteNote',
		payload: noteId
	}
}