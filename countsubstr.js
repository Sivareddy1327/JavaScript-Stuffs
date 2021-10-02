function sub(str,char)
{
    let count = 0
    str=str.split(' ')
    for(let i=0;i<str.length;i++)
    {
        if(str[i]==char)
        {
            count = count + 1
        }
    }
    return count
}

console.log(sub('I am siva reddy I am from ongole','I'))