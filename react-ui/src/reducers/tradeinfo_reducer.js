import { GET_TRADE_INFO } from '../actions/types'

export default function getTradeInfoReducer(state = {}, action) {
    console.log(action)
    switch(action.type) {
        case GET_TRADE_INFO:
            return state = action.payload
        default: 
        return state
    }
}