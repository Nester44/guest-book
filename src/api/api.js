import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://guestbook-api-test-task.herokuapp.com/api'
});

export const messagesAPI = {
  getMessages() {
    return instance.get('messages');
  },

  sendMessage(name, message) {
    return instance.post('messages', { name, message });
  }
};
