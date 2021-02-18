import ACTIONS from './actions'
import toggleTurn from '../utils/toggleTurn'



const reducer = (state, action) => {
    switch(action.type){
        case ACTIONS.UPDATE_MESSAGE: 
            return { ...state, message : action.payload}
        case ACTIONS.UPDATE_BOARD:
            let { payload } = action
            let newBoard = [...state.board]
            let newLevel = newBoard[payload.indexOne]
            newLevel.splice(payload.indexTwo, 1, payload.playerNum)
            newBoard[payload.indexOne] = newLevel
            return { ...state, board : newBoard, numMoves : state.numMoves + 1, turn : toggleTurn(state.turn)}
        case ACTIONS.SIGNIN:
            return{ ...state, players : action.payload, gameState : "playing"}
        case ACTIONS.WINNER:
            return{ ...state, gameState : 'over', winner : action.payload.winner }
        case ACTIONS.TIE:
            return {...state, gameState : 'over'}
        case ACTIONS.FULL_RESET: 
            return {  
            message : '', 
            board : [[0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0]],
            turn : 1,
            gameState : 'signin', 
            players : [],
            numMoves : 0, 
            winner : '' 
            }
        case ACTIONS.REPLAY:

            let updatedPlayers = state.players.map(player => {
                if(player.name === state.winner){
                    return {
                        name : player.name,
                        wins : player.wins + 1
                    }
                }else{
                    return player
                }
            })

            return {
            message : '', 
            board : [[0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0], [0,0,0,0,0,0,0]],
            turn : 1,
            gameState : 'playing', 
            players : updatedPlayers,
            numMoves : 0, 
            winner : '' 
            }
        default:
            return
    }
}

export default reducer