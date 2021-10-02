function countdigits(n)
{
    let result = 0
    let a = n.toString()
    for(let i=0;i<a.length;i++)
    {
        result = result + Number(a[i])
    }
    return result
}

console.log(countdigits(1947))