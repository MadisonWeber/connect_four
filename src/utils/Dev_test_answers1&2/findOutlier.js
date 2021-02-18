
// Question Two

const findOutlier = (arr) => {
    let predominatlyEven = true
    const firstThree = arr.slice(0, 3)
    let even = 0
    let odd = 0
    firstThree.forEach( num => {
        if(num % 2 === 0) even += 1
        else odd += 1
    })

    if(odd >= 2) predominatlyEven = false

    let missing

    if(predominatlyEven){
        for(let num of arr){
     
            if(num % 2 !== 0){
             missing = num 
             break
            }
        }
        return missing
    }

    for(let num of arr){
     
        if(num % 2 === 0){
         missing = num 
         break
        }
    }
    return missing

}

