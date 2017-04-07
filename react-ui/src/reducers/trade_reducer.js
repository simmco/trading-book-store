import { GET_REQ_BOOKS, DELETE_REQ } from '../actions/types'

export default function getAllBooksReducer(state = {}, action) {
    console.log(state)
    switch(action.type) {
        case GET_REQ_BOOKS:
            return {
                ...state,
                requestedBooks: action.payload
            }
        case DELETE_REQ:
            return {
                ...state,
                requestedBooks: [
                    ...state.requestedBooks.filter(book => book._bookId !== action.payload )
                ]
            }
        default: 
        return state
    }
}