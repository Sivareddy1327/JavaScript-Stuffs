function palindrome(str1,str2)
{
    let result = ''
    for(let i = str1.length-1;i>=0;i--)
    {
            result = result + str1[i]  
    }
    if(str2==result)
    {
        console.log('palindrome')
    }
    else 
    {
        console.log('is not a palindrome')
    }
    return result
}

console.log(palindrome('madam','madam'))
console.log('siva','ivas')