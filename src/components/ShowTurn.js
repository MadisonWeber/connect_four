import React, { useContext } from 'react'
import { GameContext } from '../GlobalState/GameState'
import "../css/showturn.css"

const ShowTurn = () => {

    const { state } = useContext(GameContext)
    const { turn , players } = state

    const style = {
        backgroundColor : turn === 1  ? 'var(--yellow)' : 'var(--red)',
        height : '34px',
        width : '34px',
        borderRadius : '50%',
        marginLeft : '10px'
    }

    return (
        <div className = 'showturn'>
            {(turn === 1 || turn === 2) && <span>{`${players[turn - 1]}'s turn`}</span>}
            <span style = {style}></span>
        </div>
    )
} 

export default ShowTurn
