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
            return{ ...state, players : action.payload, gameState : "playing", }
        default:
            return
    }
}

export default reducer