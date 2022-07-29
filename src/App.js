import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import MessageForm from './components/MessageForm/MessageForm.jsx';
import MessagesList from './components/MessagesList/MessagesList.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="AppWrapper">
        <MessageForm />
        <MessagesList />
      </div>
    </div>
  );
}

export default App;
