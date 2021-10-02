function repeat(char,n)
{
    let result=''
    for(let i=0;i<n;i++)
    {
        result = result + char
    }
    return result
}
console.log(repeat('s',8))