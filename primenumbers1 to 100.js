// function prime(n)
// {
//     let result = []
//     for(let i=1 ; i<=n;i++)
//     {
//     for(let j = 2;j<=i/2;j++)
    
//     {
//         if(i%j == 0)
//         {
//             continue;
//         }

//         else 
//         {
//             result.push(i)
//         }
//     }
// }
//     return result
// }
// console.log(prime(100))

function prime(n,m)
{
    let flag=false;
    for(let i = n ; i <=m ; i++)
    {
        for(j=2;j<i;j++)
        {
      if(i%j == 0)
      {
        flag = false;
        break;
      }
      else {
          flag = true;
      }
    }
    if(flag)
    {
        console.log(i)
    }
}
return flag
    
}

console.log(prime(1,100))