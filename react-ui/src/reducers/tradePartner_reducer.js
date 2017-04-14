import { GET_REQ_BOOKS, DELETE_REQ, GET_PARTER } from '../actions/types'

export default function tradePartnerReducer(state = {}, action) {
    switch(action.type) {
        case GET_PARTER:
            return {
                ...state,
                requestedBooks: action.payload
            }
        default: 
        return state
    }
}