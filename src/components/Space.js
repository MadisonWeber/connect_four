import React from 'react'
import '../css/space.css'

const Space = ({num}) => {

    const giveClass = (num) => {
        if(num === 0) return ""
        if(num === 1) return 'one'
        if(num === 2) return 'two'

        
    }

    
    return (
        <div className = {`space ${giveClass(num)}`}>
        </div>
    )
}

export default Space
