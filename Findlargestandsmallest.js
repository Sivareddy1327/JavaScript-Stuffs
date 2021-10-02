function smallbig(a)
{
    let result = a[0],result1=a[0]
    for(let i=0;i<=a.length;i++)
    {
        if(result < a[i+1])
        {
            result = a[i+1]
        }
        else if(result1 > a[i+1])
         {
            result1 = a[i+1]
        }
    }
    console.log(result,result1)
    return result
}

console.log(smallbig([2,6,1,8,2,3]))