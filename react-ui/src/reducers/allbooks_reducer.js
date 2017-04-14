import { ADD_BOOK, GET_ALL_BOOKS, REJECT_REQ, DELETE_BOOK } from '../actions/types'

export default function getAllBooksReducer(state = [], action) {

    switch(action.type) {
        case GET_ALL_BOOKS:
            return action.payload
        case ADD_BOOK:
            return [
                ...state,
                 action.payload
            ]
        case REJECT_REQ: 
            return [
                ...state.map(book => {
                    if (book._id === action.payload) {
                        delete book._requestedBy 
                    }
                    return book
                })
            ]    
        case DELETE_BOOK:
            return [
                ...state.filter(book => book._id !== action.payload)
            ]
        default: 
        return state
    }
}