import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import GameProvider from './GlobalState/GameState'


ReactDOM.render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


