function prime(n)
{
    let result = true
    for(let i=2 ; i<=n/2;i++)
    {
        if(n%i === 0)
        {
            result = 'cannot be prime'
        }
    }
    return result
}

console.log(prime(24))
console.log(prime(33))
console.log(prime(11))
console.log(prime(93))