function prime(m,n)
{
    let flag = false
    for(let i=m;i<=n;i++)
    {
        for(let j=2;j<i;j++)
        {
            if(i%j==0)
            {
                flag = false
                break;
            }
            else 
            {
                flag=true
            }
        }
        if(flag)
    {
        console.log(i)
    }
    }
    
}

console.log(prime(1,100))