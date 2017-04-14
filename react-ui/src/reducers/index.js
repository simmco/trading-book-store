import { combineReducers } from 'redux'
import mybooks_reducer from './mybooks_reducer'
import allbooks_reducer from './allbooks_reducer'
import auth_reducer from './auth_reducer'
import trade_reducer from './trade_reducer'
import tradeinfo_reducer from './tradeinfo_reducer'
import user_reducer from './user_reducer'


const rootReducer = combineReducers({
    myBooks: mybooks_reducer,
    allBooks: allbooks_reducer,
    auth: auth_reducer,
    trade: trade_reducer,
    tradeInfo: tradeinfo_reducer,
    user: user_reducer
})

export default rootReducer