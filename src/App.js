import DisplayContextData from './DisplayContextData';
import React from 'react';
import { MessageProvider } from './MessageContext';

function App () {
  return (
    <MessageProvider>
      <div className="App">
        <DisplayContextData/>
      </div>
    </MessageProvider>
  );
}

export default App;
