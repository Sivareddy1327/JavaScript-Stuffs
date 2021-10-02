function alter(str)
{
    let even ='',odd = ''
    for(let i=0;i<str.length;i++)
    {
        if(i%2==0)
        {
            even=even+str[i].toUpperCase()
        }
        else
        {
            even = even + str[i].toLowerCase()
        }
    }
    for(let i=0;i<str.length;i++)
    {
        if(i%2==0)
        {
            odd=odd+str[i].toLowerCase()
        }
        else
        {
           odd = odd + str[i].toUpperCase()
        }
    }
    return [even, odd]
}

console.log(alter('sivareddy'))