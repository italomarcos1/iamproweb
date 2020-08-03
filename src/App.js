import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Global from './styles';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <Global />
    </BrowserRouter>
  );
}

export default App;
