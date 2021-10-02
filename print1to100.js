function Fizz(n)
{
    let result = ''
    for(let i=1;i<=n;i++)
    {
        if(i%15==0)
        {
            result = result + 'Fizz'+'Buzz'
        }
        else if(i%5==0)
        {
            result = result + 'Fizz'
        }
        else if(i%3==0)
        {
            result = result + 'Buzz'
        }
        else{
            result = result + i
        }
    }
    return result
}
console.log(Fizz(100))