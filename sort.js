// function rankings(a) {
//     let arr =[],obj = {}
//     let result = a.sort()
//     console.log(result)
//     for (let i = 0; i < result.length; i++)
//     {
//         arr.push(i+1)
    
//     if(obj.hasOwnProperty(result[i]))
//     {
//         obj[a[i]] = arr[i]
//     }
// }
//     console.log(obj)
//     return arr
// }

// console.log(rankings([4,2,7,8]))

function rankings(arr)
{
    const sort = [].concat(arr).sort((a,b)=>a-b).reverse()
    console.log(sort)
    
    return arr.map((ele)=>{
        return sort.indexOf(ele)+1
    }) 
}
console.log(rankings([4,1,8,7]))