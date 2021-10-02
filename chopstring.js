function chop(str,n)
{
    let result=[]
    for(let i=0;i<str.length;i+=n)
    {
        let str2=str.substr(i,n)
        result.push(str2)
    }
    return result
}

console.log(chop('sivareddy',2))
console.log(chop('sivareddy',4))