import Immutable from 'seamless-immutable'
import { appActions } from './index'

const initialState = {
  msg: '',
  messages: []
};

export const messagesReducer = (state = initialState, action) => {
  switch(action.type) {
    case appActions.WS_TO_CLIENT_MESSAGE:
      return {
        ...state,
        messages: state.messages.concat({
          key: Math.random(),
          payload: action.payload
        })
      };
    case appActions.CHANGE_INPUT:
      return Immutable.set(state, 'msg', action.payload)
    
    default:
      return state;
  }
}