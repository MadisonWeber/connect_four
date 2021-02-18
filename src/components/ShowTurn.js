import React, { useContext } from 'react'
import { GameContext } from '../GlobalState/GameState'
import "../css/showturn.css"

const ShowTurn = () => {

    const { state } = useContext(GameContext)
    const { turn , players, numMoves } = state

    const style = {
        backgroundColor : turn === 1  ? 'var(--yellow)' : 'var(--red)',
        height : '34px',
        width : '34px',
        borderRadius : '50%',
        marginLeft : '12px',
        display: 'inline-block'
    }

    return (
        <div className = 'showturn'>
            <div className = 'player__turn'>
                {(turn === 1 || turn === 2) && <span>{`${players[turn - 1].name}'s turn`}</span>}
                <span style = {style}></span>

            </div>
            

            <div className="stats">
                {
                    players.map(player => {
                        return <div key = {player.name}><span className = 'stats__left'>{player.name} Wins: </span> <span className = 'stats__right'>{player.wins}</span></div>
                    })
                }
                <p><span className = 'stats__left'>Moves : </span> <span className = 'stats__right'>{numMoves}</span></p>

            </div>


        </div>
    )
} 

export default ShowTurn
