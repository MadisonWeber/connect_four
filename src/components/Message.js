import React, { useContext } from 'react'
import { GameContext } from '../GlobalState/GameState'
import "../css/message.css"

const Message = () => {

    const { state } = useContext(GameContext)
    const { message } = state

    
    if(!message) return null

    return (
        <div className = 'message'>
            {message.length > 1 && <span>{message}</span>}
        </div>
    )
}

export default Message
