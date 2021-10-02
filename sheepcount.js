function sheep(n)
{
    let result=''
    for(let i=1;i<=n;i++)
    {
        console.log(i)
        result = result + i+'' +'sheep...'
    }
    return result
}
console.log(sheep(3))
console.log(sheep(7))