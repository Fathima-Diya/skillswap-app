import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import io from 'socket.io-client';
import styles from './Chat.module.css'; // Import CSS module

const socket = io('http://localhost:3001');

function Chat() {
  const location = useLocation();
  const { selectedUser } = location.state || { selectedUser: {} };
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on('message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const sendMessage = () => {
    const msg = {
      sender: 'loggedInUserId', // Replace with actual logged in user ID
      receiver: selectedUser.id,
      message,
    };
    socket.emit('chat message', msg);
    setMessages((prevMessages) => [...prevMessages, msg]);
    setMessage('');
  };

  return (
    <div className={styles.chatContainer}>
      <h2>Chat with {selectedUser.name}</h2>
      <div className={styles.chatWindow}>
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === 'loggedInUserId'? styles.sentMessage : styles.receivedMessage}>
            <strong>{msg.sender === 'loggedInUserId'? '' : selectedUser.name}</strong>: {msg.message}
          </div>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.input}
        />
        <button onClick={sendMessage} className={styles.sendButton}>Send</button>
      </div>
    </div>
  );
}

export default Chat;

