import React, { useState, createContext } from 'react';

export const MessageContext = createContext();

export const MessageProvider = ({children}) => {
  const [messages, setMessages] = useState([
    'quo vero reiciendis velit similique earum',
    'alias odio sit',
    'vero eaque aliquid doloribus et culpa'
  ]);

  return (
    <MessageContext.Provider value={[messages, setMessages]}>
      {children}
    </MessageContext.Provider>
  );
};

