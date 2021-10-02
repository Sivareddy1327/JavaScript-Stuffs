function findTwins(a){
    let obj = {},no = 1,result,twins
    for (let i = 0; i < a.length; i++)
    {
        if (obj.hasOwnProperty(a[i]))
        {
            obj[a[i]] = obj[a[i]] + 1
        }
        else {
            obj[a[i]] = 1
        }
    }
    console.log(obj)
    for (const key in obj)
    {
        if (obj[key] > no)
        {
            no = obj[key]
            twins = key
            break;

        }
        else {
            twins = null
        }

        
    }
    return twins
}

console.log(findTwins([2,3,6,34,7,8,2]))
console.log(findTwins([3,6,9,2,4,3,1,0]))
console.log(findTwins([3,1,4,2,5]))
console.log(findTwins([4,1,6,1,5]))
console.log(findTwins([]))