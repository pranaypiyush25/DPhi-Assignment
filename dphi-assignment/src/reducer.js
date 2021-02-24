import { v4 as uuidv4 } from 'uuid';

export default function reducer(state, action){
    switch(action.type){
        case 'SET_CURRENT_NOTE':
            return {
                ...state,
                currentNote: action.payload
            }
        
        case 'DELETE_NOTE':
            const deleteNotes = state.Notes.filter(
                note => note.id !== action.payload
            )

            return {
                ...state,
                Notes: deleteNotes
            }

        case 'ADD_NOTE':
            const newNote = {
                id: uuidv4(),
                title: action.payload.title,
                creator: action.payload.creator,
                note: action.payload.note
            }

            const addedNotes = [...state.Notes, newNote]

            return {
                ...state,
                Notes: addedNotes
            }

        case 'UPDATE_NOTE':
            const updatedNote = {
                ...state.currentNote,
                title: action.payload.title,
                creator: action.payload.creator,
                note: action.payload.note
            }
            
            const updatedNoteIndex = state.Notes.findIndex(
                note => note.id === state.currentNote.id
            )

            const updatedNotes = [
                ...state.Notes.slice(0,updatedNoteIndex),
                updatedNote,
                ...state.Notes.slice(updatedNoteIndex+1)
            ]

            return {
                currentNote: { id: 0, title: "", creator: "", note: "" },
                Notes: updatedNotes
            }

        case'RESET':
            return{
                ...state,
                currentNote: { id: 0, title: "", creator: "", note: "" }
            }

        default:
            return state
    }
}