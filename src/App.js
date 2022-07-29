import React from 'react';
import './App.css';
import AdminMessage from './components/AdminMessage/AdminMessage.jsx';
import MessageForm from './components/MessageForm/MessageForm.jsx';
import MessagesList from './components/MessagesList/MessagesList.jsx';

function App() {
  return (
    <div className="App">
      <AdminMessage />
      <MessageForm />
      <MessagesList />
    </div>
  );
}

export default App;
