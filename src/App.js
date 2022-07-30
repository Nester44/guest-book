import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer/MainContainer.jsx';
import Header from './components/Header/Header.jsx';
import MessageForm from './components/MessageForm/MessageForm.jsx';
import MessagesList from './components/MessagesList/MessagesList.jsx';



function App() {
  return (
    <div className="App">
      <Header />
      <MainContainer>
        <MessageForm />
        <MessagesList />
      </MainContainer>
    </div>
  );
}

export default App;
