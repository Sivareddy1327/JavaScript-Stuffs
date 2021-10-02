function vowels(str)
{
    str=str.toLowerCase()
    let count = 0
    for(let i=0;i<=str.length;i++)
    {
        if(str[i]=='a'||str[i]=='i'||str[i]=='o'||str[i]=='e'||str[i]=='u')
        {
            count = count + 1
        }
    }
    return count
}

console.log(vowels('I am siva reddy.I am from ongole which is located at Andhra Pradesh '))