function diamond(n){
    let result = ''

    if( n<= 0 || n%2 == 0)
    {
        result = null
    }
    else
    {
        for(let i =0 ;i < n ; i++)
        {      
              result = result + '*'
        }

    }
    return result;
  }

  console.log(diamond(1))
  console.log(diamond(3))
  console.log(diamond(5))
  console.log(diamond(2))
  console.log(diamond(-2))
  console.log(diamond(0))