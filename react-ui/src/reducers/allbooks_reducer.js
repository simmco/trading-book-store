import { ADD_BOOK, GET_ALL_BOOKS } from '../actions/types'

export default function getAllBooksReducer(state = [], action) {

    switch(action.type) {
        case GET_ALL_BOOKS:
            return action.payload
        case ADD_BOOK:
            return [
                ...state,
                 action.payload
            ]
        default: 
        return state
    }
}