import { useContext } from 'react';
import Board from './components/Board'
import Message from './components/Message'
import SignIn from './components/SignIn'
import ShowTurn from './components/ShowTurn'
import './css/App.css';
import { GameContext } from "./GlobalState/GameState"


function App() {

  const { state, dispatch } = useContext(GameContext)
  const { gameState } = state

  return (
    <div className="App">
        <h1 className = 'title'>Connect Four</h1>
        <p className = 'instructions'>Two players! Get four colours in a row and you win!</p>
        <Board />
        <Message />
        {gameState === 'signin' && <SignIn /> }
        {gameState === 'playing' && <ShowTurn />}
    </div>
  );
}

export default App;
