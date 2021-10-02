function swap(obj,char)
{
    let result={}
    for(let k in obj)
    {
        if(k==char)
        {
            result[obj[k]] = k
        }
        else{
            result[k] = obj[k]
        }
    }
    return result
}
console.log(swap({siva:'reddy',naveen:'reddy'},'siva'))