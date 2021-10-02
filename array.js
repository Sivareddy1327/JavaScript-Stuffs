function arry(a)
{

    let result ,sum1 = 0,sum2 = 0,diff
    if(a.length % 2 == 0)
    {
        result = a.length /2
        for(let i = 0 ;i < result ; i++){
            sum1 = sum1 + a[i]
        }
        for (let i = result  ; i < a.length ;i++){
            sum2 = sum2 + a[i]
        }
        if(sum1 > sum2)
        {
            diff = sum1 - sum2
        }
        else {
            diff = sum2 - sum1
        }
    }
    
    return diff
}

console.log(arry([1,2,1,4,2,0]))
console.log(arry([20,10]))
console.log(arry([1]))