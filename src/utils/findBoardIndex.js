export default (previewPosition , board) => {
    let second = -1
    for(let i = 0;  i < board.length; i++){
        if(board[i][previewPosition] === 0){
            second = i
            break
        }
    }
    return second >= 0 ? second : null
}