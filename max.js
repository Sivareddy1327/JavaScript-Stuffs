function max(arr)
{
    let result=arr[0]
    for(let i=0;i<arr.length;i++)
    {
        if(result<arr[i+1])
        {
            result = arr[i+1]
        }
    }
    return result
}

console.log(max([2,7,1,3,9,2,6,4]))