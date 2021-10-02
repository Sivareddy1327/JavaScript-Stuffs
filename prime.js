function isprime(n)
{
    let result 
    for(let i=2;i<=n/2;i++)
    {
        if(n%i == 0)
        {
            result = 'cannot be prime'
            break;
        }
        else 
        {
            result = 'can be prime'
        }

    }
    

    return result
}

console.log(isprime(24))
console.log(isprime(93))
console.log(isprime(11))
console.log(isprime(97))
console.log(isprime(19))