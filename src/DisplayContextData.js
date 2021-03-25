import React, { useContext } from 'react';
import { MessageContext } from './MessageContext';

const DisplayContextData = () => {
  const [messages, setMessages] = useContext(MessageContext);

  return (
    <div>
      {messages.map((m, i) => (
        <h3>{`${i}.${m}`}</h3>
      ))}
    </div>
  );
};

export default DisplayContextData;
