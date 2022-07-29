/* eslint-disable no-case-declarations */
import { messagesAPI } from '../api/api.js';
const SET_MESSAGES = 'SET_MESSAGES';
const SEND_MESSAGE = 'SEND_MESSAGE';

const setMessages = (messages) => (
  { type: SET_MESSAGES, messages }
);

export const sendMessageSuccess = (name, message) => (
  { type: SEND_MESSAGE, name, message }
);

const initState = {
  messages: []
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
  case SET_MESSAGES:
    return {
      ...state,
      messages: [...action.messages],
    };
  case SEND_MESSAGE:
    const newMessage = {
      _id: Date.now(),
      name: action.name,
      message: action.message
    };
    return {
      ...state,
      messages: [...state.messages, newMessage],
    };
  default: return state;
  }
};

export const getMessages = () => (dispatch) => {
  messagesAPI.getMessages()
    .then((response) => {
      if (response.status === 200) {
        dispatch(setMessages(response.data));
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
