import { createContext, useReducer } from 'react'
import reducer from './reducer'


export const GameContext = createContext()



const GameContextProvider = ({children}) => {

    const initialState = { 
        message : '', 
        board : [[0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0]],
        turn : 1,
        gameState : 'signin', 
        players : [],
        numMoves : 0, 
        winner : ''
    }

    const [state, dispatch ] = useReducer(reducer, initialState)

    return (
        <GameContext.Provider value = {{state, dispatch}}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContextProvider
