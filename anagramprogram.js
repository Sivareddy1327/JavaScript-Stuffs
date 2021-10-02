function anagram(str1,str2)
{
    let result
    str1=str1.toLowerCase()
    str2=str2.toLowerCase()
    let a= str1.length
    let b=str2.length
    for(let i=0;i<str1.length;i++)
    {
        if(str2.includes(str1[i])&& a==b)
        {
            result = true
        }
        else {
            result = false
            break;
        }
    }

    return result
}

console.log(anagram('sivareddy','resivaddy'))
console.log(anagram('siva','siva'))