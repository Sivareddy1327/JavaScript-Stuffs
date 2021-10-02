function first(arr,n)
{
    if(n == undefined)
    {
        return arr[0]
    }
    else if(n<0)
    {
        return arr.slice(0)
    }
    else{
        return arr.slice(0,n)
    }
}

console.log(first([1,2,3,45,],3))
console.log(first([1,2,3,45,]))
console.log(first([1,2,3,4],-1))
