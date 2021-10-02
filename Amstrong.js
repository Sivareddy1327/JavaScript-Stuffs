function Am(on)
{
   let result=0,rem,a
   let n=on
        while(n>0)
        {
            rem = n%10    
            result=result+rem*rem*rem
            n=Math.floor(n/10)
        }
    console.log(result)
    console.log(n)
        if(on==result)
        {
            a='amstrong'
        }
        else 
        {
            a='not amstrong'
        }

        return a
}

console.log(Am(153))