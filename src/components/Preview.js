import React, { useState, useEffect, useContext } from 'react'
import "../css/preview.css"
import { GameContext } from '../GlobalState/GameState'
import ACTIONS from '../GlobalState/actions'
import findRowIndex from '../utils/findRowIndex'
import evaluateBoard from '../utils/evaluateBoard'

const Preview = () => {

    const [ previewPosition, setPreviewPosition ] = useState(3)
    const [ currentRowIndex, setCurrentRowIndex ] = useState(0)
    const [ currentColIndex, setCurrentColIndex ] = useState(0)

    const { state, dispatch }  = useContext(GameContext)
    const { board, turn, numMoves, players } = state


    useEffect(()=> {
        const checkKeyPress = (e)=> {
            const { keyCode, target } = e
            //left key === 37
            if(keyCode === 37 && previewPosition !== 0)setPreviewPosition(p => p - 1 )
            //right key === 39
            if(keyCode === 39 && previewPosition !== 6)setPreviewPosition( p => p + 1)
            //space bar === 32
            if(keyCode === 32 && target === document.body){
                e.preventDefault()

                const ind = findRowIndex(previewPosition, board)
                
                if(!ind && ind !== 0){
                    setTimeout(()=>{
                        dispatch({ type : ACTIONS.UPDATE_MESSAGE, payload : ''})
                    }, 2000)
                    return dispatch({ type : ACTIONS.UPDATE_MESSAGE, payload : 'Cannot add to full column'})
                }
                
                dispatch({type : ACTIONS.UPDATE_BOARD, payload : {indexOne : ind, indexTwo : previewPosition, playerNum : turn}})
                
                
                setCurrentRowIndex(ind)
                setCurrentColIndex(previewPosition)
                setPreviewPosition(3)
            } 

            return
        }

        document.addEventListener('keydown', checkKeyPress)

        return ()=> document.removeEventListener('keydown', checkKeyPress)

    }, [previewPosition, board, turn, dispatch])



    useEffect(()=> {
        if(numMoves < 7) return 
        const checkWinner = () => {
            const winner = evaluateBoard(board, currentColIndex, currentRowIndex)
            if(winner){
                let gameWinner = players[winner - 1].name
                dispatch({type : ACTIONS.WINNER, payload : {winner : gameWinner}})
            } 
        }   

        checkWinner()
    }, [board, currentRowIndex, numMoves, currentColIndex, players, dispatch])



    useEffect(() => {
        if(numMoves === 42){
            dispatch({ type : ACTIONS.TIE})
        }
    }, [numMoves, dispatch])



    return (

    <div className="preview-row">
        <div className={`preview-space ${previewPosition === 0 ? `active${turn === 1 ? 'one' : 'two'}` : ""} `}></div>
        <div className={`preview-space ${previewPosition === 1 ? `active${turn === 1 ? 'one' : 'two'}` : ''} `}></div>
        <div className={`preview-space ${previewPosition === 2 ? `active${turn === 1 ? 'one' : 'two'}` : ''} `}></div>
        <div className={`preview-space ${previewPosition === 3 ? `active${turn === 1 ? 'one' : 'two'}` : ''} `}></div>
        <div className={`preview-space ${previewPosition === 4 ? `active${turn === 1 ? 'one' : 'two'}` : ''} `}></div>
        <div className={`preview-space ${previewPosition === 5 ? `active${turn === 1 ? 'one' : 'two'}` : ''} `}></div>
        <div className={`preview-space ${previewPosition === 6 ? `active${turn === 1 ? 'one' : 'two'}` : ''} `}></div>
    </div>
    )
}

export default Preview
