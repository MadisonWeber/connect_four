
const evaluateBoard = (board, columnIndex, rowIndex) => {
   
    let winner = null
    let consecutiveOne = 0
    let consecutiveTwo = 0
    let last = null


    // This Loop Checks if anyone has won horizontally

    for(let j = 0; j < board[rowIndex].length ; j++){

        if(board[rowIndex][j] === 0){
            consecutiveOne = 0
            consecutiveTwo = 0
            continue
        }

        if(board[rowIndex][j] === 1 && last === 1){
            consecutiveOne += 1
        }else if(board[rowIndex][j] === 2 && last === 2){
            consecutiveTwo += 1   
        }else if(board[rowIndex][j] === 1 && last !== 1){
            consecutiveOne = 1
            last = 1    
        }else if(board[rowIndex][j] === 2 && last !== 2){
            consecutiveTwo = 1
            last = 2   
        }
        
        if(consecutiveOne === 4){
            winner = 1
            break
        }

        if(consecutiveTwo === 4){
            winner = 2
            break
        }

        
    }

    // Check if Anyone had won Vertically

    if(!winner && rowIndex <= 2){
        let resArr = []
        for(let i = rowIndex; i <= rowIndex + 3; i++){
            resArr.push(board[i][columnIndex])
        }
        let all = resArr.every(num => num === board[rowIndex][columnIndex])

        if(all){
            winner = board[rowIndex][columnIndex]
            return winner
        }

    }

    // Check if Anyone has won Diagonally

    const recursiveCheckDownLeft = (rowIndex, columnIndex, num) => {
        if(rowIndex + 1 >= 6 ) return 0
        if(columnIndex - 1 < 0) return 0   
        if(board[rowIndex + 1][columnIndex -1] !== num ){
            return 0
        }
        if(board[rowIndex + 1][columnIndex -1] === num){
            return 1 + recursiveCheckDownLeft(rowIndex + 1, columnIndex - 1, num )
        }
    }

    const recursiveCheckDownRight = (rowIndex, columnIndex, num) => {
        if(rowIndex + 1 >= 6) return 0
        if(columnIndex + 1 > 6) return 0

        if(board[rowIndex + 1][columnIndex + 1] !== num ){
            return 0
        }

        if(board[rowIndex+1][columnIndex + 1] === num ){
            return 1 + recursiveCheckDownRight(rowIndex + 1, columnIndex + 1, num)
        }
    }

    const recursiveCheckUpLeft = (rowIndex, columnIndex, num) => {
        if(rowIndex - 1 < 0) return 0
        if(columnIndex - 1 < 0) return 0 

        if(board[rowIndex - 1][columnIndex - 1] !== num ){
            return 0
        }

        if(board[rowIndex - 1][columnIndex - 1] === num ){
            return 1 + recursiveCheckUpLeft(rowIndex - 1, columnIndex - 1, num)
        }

    }   

    const recursiveCheckUpRight = (rowIndex, columnIndex, num) => {
        if(rowIndex - 1 < 0) return 0
        if(columnIndex + 1 > 6) return 0 

        if(board[rowIndex - 1][columnIndex + 1] !== num ){
            return 0
        }

        if(board[rowIndex - 1][columnIndex + 1] === num ){
            return 1 + recursiveCheckUpRight(rowIndex - 1, columnIndex + 1, num)
        }

    }

    if(!winner){
      
        let numDownRight = recursiveCheckDownRight(rowIndex, columnIndex, board[rowIndex][columnIndex])
        let numDownLeft = recursiveCheckDownLeft(rowIndex, columnIndex, board[rowIndex][columnIndex])
        let numUpLeft = recursiveCheckUpLeft(rowIndex, columnIndex, board[rowIndex][columnIndex])
        let numUpRight =  recursiveCheckUpRight(rowIndex, columnIndex, board[rowIndex][columnIndex])

        if(numDownRight + numUpLeft >= 3){
            winner = board[rowIndex][columnIndex]
        }

        if(numDownLeft + numUpRight >= 3){
            winner = board[rowIndex][columnIndex]
        }

    }


    return winner
}

export default evaluateBoard

