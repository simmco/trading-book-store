import { ADD_BOOK } from '../actions/types'

export default function getAllBooksReducer(state = [], action) {

    switch(action.type) {
        case ADD_BOOK:
            return [
                ...state,
                 action.payload
            ]
        default: 
        return state
    }
}