// MessageContext.js
import React, { createContext, useState, useContext } from 'react';

// Define context
const MessageContext = createContext();

// Define provider component
export const MessageProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addMessage = (text) => {
    setMessages(prevMessages => [...prevMessages, { id: prevMessages.length + 1, text }]);
  };

  return (
    <MessageContext.Provider value={{ messages, addMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

// Custom hook to use the message context
export const useMessageContext = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error('useMessageContext must be used within a MessageProvider');
  }
  return context;
};
