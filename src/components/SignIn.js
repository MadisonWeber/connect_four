import "../css/signin.css"
import { useState, useContext } from 'react'
import { GameContext } from "../GlobalState/GameState"
import ACTIONS from '../GlobalState/actions'

const SignIn = () => {


    const { dispatch } = useContext(GameContext)



    const [playerOne, setPlayerOne] = useState('')
    const [playerTwo, setPlayerTwo] = useState('')


    const handleSubmit = e => {
        e.preventDefault()
        dispatch({type : ACTIONS.SIGNIN, payload : [{ name : playerOne, wins : 0}, { name : playerTwo , wins : 0}]})
    }
 
    return (
        <div className = 'signin'>
            <form onSubmit = {handleSubmit}>
                <h4>Enter Player Names to Play</h4>
                <div className = 'form__container'>
                    <label htmlFor= 'playerOne'>Player One Name</label>
                    <input type="text" name = 'playerOne' value = {playerOne}  onChange = {e => setPlayerOne(e.currentTarget.value)}/>
                </div>
                <div className = 'form__container'>
                    <label htmlFor= 'playerTwo'>Player Two Name</label>
                    <input type="text" name = 'playerTwo' value = {playerTwo}  onChange = {e => setPlayerTwo(e.currentTarget.value)}/>
                </div>

                <button className = 'playbtn' type = 'submit' disabled = {playerOne.length <= 2 || playerTwo.length <= 2}>Lets Play</button>
            </form>
        </div>
    )
}

export default SignIn
