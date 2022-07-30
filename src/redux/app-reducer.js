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

export const sendMessageSuccess = (name, message, id) => (
  { type: SEND_MESSAGE, name, message, id }
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
      messages: [...action.messages.reverse()],
    };
  case SEND_MESSAGE:
    const newMessage = {
      _id: action.id,
      name: action.name,
      message: action.message,
    };
    return {
      ...state,
      messages: [newMessage, ...state.messages],
    };
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
        const { name, message, id } = response.data;
        dispatch(sendMessageSuccess(name, message, id));
      }
    });
};



export default appReducer;
