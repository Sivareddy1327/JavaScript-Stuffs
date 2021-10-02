function countupdown(n)
{
    let result =[]
    for(let i=1;i<n;i++)
    {
        result.push(i)
    }
    for(let i=n;i>0;i--)
    {
        result.push(i)
    }
    return result
}
console.log(countupdown(9))