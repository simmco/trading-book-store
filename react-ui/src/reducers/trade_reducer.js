import { GET_REQ_BOOKS } from '../actions/types'

export default function getAllBooksReducer(state = {}, action) {

    switch(action.type) {
        case GET_REQ_BOOKS:
            return {
                ...state,
                requestedBooks: action.payload
                }
        default: 
        return state
    }
}