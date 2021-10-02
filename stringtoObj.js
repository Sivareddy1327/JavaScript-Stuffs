function str2obj(obj)
{
    let result = []
    for(let k in obj)
    {
        result.push(`${k}=${obj[k]}`)
    }
    return result.join(',')
}

console.log(str2obj({a:1,b:2}))