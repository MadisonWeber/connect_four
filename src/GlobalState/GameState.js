import { createContext, useReducer } from 'react'
import reducer from './reducer'


export const GameContext = createContext()

const GameContextProvider = ({children}) => {

    const initalState = { 
        message : '', 
        board : [[0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0]],
        turn : 1,
        gameState : 'signin', 
        players : [],
        numMoves : 0
    }

    const [state, dispatch ] = useReducer(reducer, initalState)

    return (
        <GameContext.Provider value = {{state, dispatch}}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContextProvider
