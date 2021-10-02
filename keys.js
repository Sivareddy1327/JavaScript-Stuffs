function keys(obj)
{
    let result =[]
    for(let k in obj)
    {
        result.push(k)
    }
    return result
}
console.log(keys({d:1,c:2,t:3}))
console.log(keys({}))