/* eslint-disable no-case-declarations */
const SET_MESSAGES = 'SET_MESSAGES';
const SEND_MESSAGE = 'SEND_MESSAGE';

export const sendMessage = (name, message) => (
  { type: SEND_MESSAGE, name, message }
);

const initState = {
  messages: [
    { id: 1, name: 'nikita', message: 'message' },
    { id: 2, name: 'nikita', message: 'message' },
    { id: 3, name: 'nikita', message: 'message' },
  ]
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
      id: Date.now(),
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



export default appReducer;
