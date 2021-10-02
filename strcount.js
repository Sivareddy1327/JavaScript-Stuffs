function strcount(str,char)
{
    let count = 0
    for(let i=0;i<=str.length;i++)
    {
        if(str[i]===char)
        {
            count=count+1
        }
        else 
        {
            count = count
        }
    }
    return count
}

console.log(strcount('sivaredddy','d'))
console.log(strcount('sivaredddy','z'))
console.log(strcount('','d'))