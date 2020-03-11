export const appActions = {
  CHANGE_INPUT: 'CHANGE_INPUT',
  WS_TO_SERVER_SEND_MESSAGE: 'WS_TO_SERVER_SEND_MESSAGE',
  WS_TO_CLIENT_MESSAGE: 'WS_TO_CLIENT_MESSAGE',
  
  inputChangeHandler: (value) => ({
    type: appActions.CHANGE_INPUT,
    payload: value
  }),
  
  sendMessage: (msg) => ({
    type: appActions.WS_TO_SERVER_SEND_MESSAGE,
    payload: msg
  }),
}