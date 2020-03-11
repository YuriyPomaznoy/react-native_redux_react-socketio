import { combineReducers } from 'redux'
import { messagesReducer } from './app'

const rootReducer = combineReducers({
  messages: messagesReducer,
})

export default rootReducer;