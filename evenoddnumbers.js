function evenodd(arr)
{
    let even=[],odd=[]
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2==0)
        {
            even.push(arr[i])
        }
        else 
        {
            odd.push(arr[i])
        }
    }
    return [even,odd]
}

console.log(evenodd([4,2,9,1,3,6]))