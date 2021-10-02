function array(a)
{
    let result = []
     a = a.join(',').split(',')
     a.map((ele)=>{
         return result.push(Number(ele))
     })

     return result
}

console.log(array([1,[2],[6,0,8,3,[5,2]],4,[5,6,7]]))