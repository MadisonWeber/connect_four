

const findRowIndex = (previewPosition , board) => {
    let res = -1
    for(let i = board.length -1;  i >= 0; i--){
        if(board[i][previewPosition] === 0){
            res = i
            break
        }
    }
    return res >= 0 ? res : null
}

export default findRowIndex