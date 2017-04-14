import { GET_USER } from '../actions/types'

export default function tradePartnerReducer(state = {}, action) {
    switch(action.type) {
        case GET_USER:
            return state = action.payload
        default: 
        return state
    }
}