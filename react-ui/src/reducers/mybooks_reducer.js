import { ADD_BOOK, GET_MY_BOOKS } from '../actions/types'

export default function getMyBooksReducer(state = [], action) {

    switch(action.type) {
        case GET_MY_BOOKS:
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