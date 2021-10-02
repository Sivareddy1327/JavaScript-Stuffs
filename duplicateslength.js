function duplicates(arr)
{

    let flag = false
    let result = []
    for(let i = 0 ; i < arr.length ; i++)
    {

            if(arr[i] === arr[i+1])
            {
                result.push(arr[i])
            }

            else if (arr[i-1] === arr[i-2])
            {
               result.push(arr[i])
            }
        }


    return result
}

console.log(duplicates([1,1,2,2,2,3]))
console.log(duplicates([4,4,4,4,4,4,4,4,4,4,4]))