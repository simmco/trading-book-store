import { combineReducers } from 'redux'
import mybooks_reducer from './mybooks_reducer'
import allbooks_reducer from './allbooks_reducer'


const rootReducer = combineReducers({
    myBooks: mybooks_reducer,
    allBooks: allbooks_reducer
})

export default rootReducer