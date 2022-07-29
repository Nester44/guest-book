/* eslint-disable no-case-declarations */
import { messagesAPI } from '../api/api.js';

const SET_MESSAGES = 'SET_MESSAGES';
const SEND_MESSAGE = 'SEND_MESSAGE';
const SET_INITIALIZATION = 'SET_INITIALIZATION';

const setMessages = (messages) => (
  { type: SET_MESSAGES, messages }
);
const setInitialization = () => (
  { type: SET_INITIALIZATION }
);

export const sendMessageSuccess = (name, message) => (
  { type: SEND_MESSAGE, name, message }
);

const initState = {
  messages: [],
  isInitialized: false,
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
  case SET_MESSAGES:
    return {
      ...state,
      messages: [...action.messages],
    };
  case SEND_MESSAGE:
  case SET_INITIALIZATION:
    return {
      ...state,
      isInitialized: true,
    };
  default: return state;
  }
};

export const getMessages = () => (dispatch) => {
  messagesAPI.getMessages()
    .then((response) => {
      if (response.status === 200) {
        dispatch(setMessages(response.data));
        dispatch(setInitialization());
      }
    });
};

export const sendMessage = (messageBody) => (dispatch) => {
  messagesAPI.sendMessage(messageBody.name, messageBody.message)
    .then((response) => {
      if (response.status === 200) {
        dispatch(sendMessageSuccess(messageBody.name, messageBody.message));
      }
    });
};



export default appReducer;
