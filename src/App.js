import React from 'react';
import './App.css';
import AdminMessage from './components/AdminMessage/AdminMessage';
import MessageForm from './components/MessageForm/MessageForm';
import MessagesList from './components/MessagesList/MessagesList';

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
