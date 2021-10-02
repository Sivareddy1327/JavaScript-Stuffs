function inversion(arr)
{
    let result = 0
    for(let i=0;i<arr.length;i++)
    {
       let temp=arr[i]
        for(let j=i+1;j<arr.length;j++)
        {
        if(temp>arr[j])
        {
            temp=arr[j]
            arr[j]=arr[i]
            arr[i]=temp
            result = result + 1
        }
    }
    }
    return result
}

console.log(inversion([2,3,1]))
console.log(inversion([1,2]))
console.log(inversion([8, 6, 6, 1, 1, 1, 3, 4, 2]))     
console.log(inversion([7,8,6,9,2,1,0])) 
console.log(inversion([2,2,1,1]))