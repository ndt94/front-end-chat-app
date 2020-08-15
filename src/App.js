import React, { useEffect, useState } from 'react';
import './App.css';
import { sendMsg, connect } from './api';
import { Header } from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';

let temp = [];

function App() {
  const [chatHistory, setChatHistory] = useState([]);
  useEffect(() => {
    connect((msg) => {
      console.log('msg', msg.data);
      temp.push(msg.data)
      setChatHistory(temp);
    });
  }, [setChatHistory, chatHistory]);

  const send = () => {
    sendMsg('hello');
  };

  return (
    <div className='App'>
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <button onClick={send}>Hit</button>
    </div>
  );
}

export default App;
