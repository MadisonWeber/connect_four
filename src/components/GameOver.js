import { useContext } from 'react';
import { GameContext } from '../GlobalState/GameState'
import ACTIONS from '../GlobalState/actions'
import "../css/gameover.css"

const GameOver = () => {

    const { state, dispatch } = useContext(GameContext)
    const { winner } = state

    return (
        <div className = 'gameover'>
            <div className = 'gameover__inner'>
                { winner ? <h3>Congrats <span>{winner}</span> You have won!!</h3> : <h3>WOW a tie! That is Rare</h3>}
                <button onClick = {() => dispatch({ type : ACTIONS.REPLAY})}>Play Again ?</button>
                <button onClick = {() => dispatch({ type : ACTIONS.FULL_RESET})}>New Players</button>
            </div>
        </div>
    )
}

export default GameOver
