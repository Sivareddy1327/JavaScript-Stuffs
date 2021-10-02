function check(obj,char)
{
    for(let k in obj)
    {
        if(k == char)
        {
            return true
            
        }
    }
}
console.log(check({first:'siva',last:'reddy'},'first'))