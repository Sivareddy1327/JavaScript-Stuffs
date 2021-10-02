function find(arr)
{
    let a = [].concat(arr).sort((a,b)=>a-b).reverse()
   return arr.map((ele)=>{
        return a.indexOf(ele)+1

})
    return result
}
console.log(find([8,2,1,7,5]))