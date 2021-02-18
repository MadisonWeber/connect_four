import { useContext } from 'react';
import Board from './components/Board'
import Message from './components/Message'
import SignIn from './components/SignIn'
import ShowTurn from './components/ShowTurn'
import GameOver from './components/GameOver'
import './css/App.css';
import { GameContext } from "./GlobalState/GameState"


function App() {

  const { state } = useContext(GameContext)
  const { gameState } = state

  return (
    <div className="App">
        <h1 className = 'title'>Connect Four</h1>
        <p className = 'instructions'>Two player. Get four colours in a row and you win!</p>
        <p className = 'instructions'>Use Arrows to Navigate.. Space-Bar to send</p>
        <Board />
        <Message />
        {gameState === 'signin' && <SignIn /> }
        {gameState === 'playing' && <ShowTurn />}
        {gameState === 'over' && <GameOver />}
    </div>
  );
}

export default App;
