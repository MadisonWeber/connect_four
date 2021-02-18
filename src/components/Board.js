import { useContext } from 'react'
import Preview from '../components/Preview'
import Space from './Space'
import { GameContext } from '../GlobalState/GameState'
import "../css/board.css"

const Board = () => {

    const { state } = useContext(GameContext)
    const { board } = state 
    


    return (
        <div className = 'board'>
            <Preview />
            {
                board.map( (row, index) => (
                    <div className="row" key = {index}>
                        {row.map((space, index) => (
                            <Space key = {index} num = {space}/>
                        ))}
                    </div>
                 ))
            }

        </div>
    )
}

export default Board
