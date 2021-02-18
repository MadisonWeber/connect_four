// Question One

const isValidWalk = (arr) => {
    if(arr.length !== 10) return false 

    let northsouth = 0
    let westeast = 0

    for(let letter of arr){
        if(letter === 'n') northsouth += 1
        if(letter === 's') northsouth -= 1
        if(letter === 'w') westeast -=1
        if(letter === 'e') westeast +=1
    }

    if(northsouth === 0 && westeast === 0)
        return true


    return false
}
