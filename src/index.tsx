import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Card from './components/Card';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
  <App />
    <Card width={'100px'} height={'100px'}/>
  </>
);
    


