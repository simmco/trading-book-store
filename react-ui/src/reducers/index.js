import { combineReducers } from 'redux'
import mybooks_reducer from './mybooks_reducer'
import allbooks_reducer from './allbooks_reducer'
import auth_reducer from './auth_reducer'
import trade_reducer from './trade_reducer'


const rootReducer = combineReducers({
    myBooks: mybooks_reducer,
    allBooks: allbooks_reducer,
    auth: auth_reducer,
    trade: trade_reducer
})

export default rootReducer