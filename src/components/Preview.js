import React, { useState, useEffect, useContext } from 'react'
import "../css/preview.css"
import { GameContext } from '../GlobalState/GameState'
import ACTIONS from '../GlobalState/actions'
import findBoardIndex from '../utils/findBoardIndex'

const Preview = () => {

    const [ previewPosition, setPreviewPosition ] = useState(3)

    const { state, dispatch }  = useContext(GameContext)
    const { board, turn } = state


    useEffect(()=> {
        const checkKeyPress = (e)=> {
           
            const { keyCode } = e
            //left key === 37
            if(keyCode === 37 && previewPosition !== 0)setPreviewPosition(p => p - 1 )
            //right key === 39
            if(keyCode === 39 && previewPosition !== 6)setPreviewPosition( p => p + 1)
            //space bar === 32
            if(keyCode === 32 && e.target === document.body){
                e.preventDefault()

                const indexOne = findBoardIndex(previewPosition, board)
                console.log('indexone is ', indexOne)
                
                if(!indexOne && indexOne !== 0){
                    return dispatch({ type : ACTIONS.UPDATE_MESSAGE, payload : 'Cannot add to full column'})
                }

                dispatch({type : ACTIONS.UPDATE_BOARD, payload : {indexOne : indexOne, indexTwo : previewPosition, playerNum : turn}})


                setPreviewPosition(3)
            } 

            return
        }

        document.addEventListener('keydown', checkKeyPress)

        return ()=> document.removeEventListener('keydown', checkKeyPress)

    }, [previewPosition])



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
