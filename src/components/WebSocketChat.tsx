import React, { useEffect, useState } from 'react';

const WebSocketChat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3001'); // sesuaikan dengan port backend WebSocket
    setWs(socket);

    socket.onmessage = (event) => {
      setMessages((prev) => [...prev, event.data]);
    };

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = () => {
    if (ws && input.trim()) {
      ws.send(input);
      setInput('');
    }
  };

  return (
    <div className='auth-page-container'>
      <h1>WebSocket Chat</h1>
      <div style={{ width: '100%', maxWidth: '400px' }}>
        <div
          style={{
            border: '1px solid #ccc',
            padding: '1rem',
            minHeight: '200px',
            marginBottom: '1rem',
          }}
        >
          {messages.map((msg, index) => (
            <p key={index} style={{ margin: 0 }}>
              {msg}
            </p>
          ))}
        </div>
        <div className='form-group'>
          <input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Type your message'
          />
          <button onClick={sendMessage} className='auth-button'>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebSocketChat;
