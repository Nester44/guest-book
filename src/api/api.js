import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000/api/'
});

export const messagesAPI = {
  getMessages() {
    return instance.get('messages');
  },

  sendMessage(name, message) {
    return instance.post('messages', { name, message });
  }
};
