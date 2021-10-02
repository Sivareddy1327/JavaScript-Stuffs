function end(str,char)
{
    str=str.split(' ')
    let lastIndex = str.length-1
    for(let i=0;i<str.length;i++)
    {
        if(str[lastIndex] === char)
        {
            return true
        }
        else{
            return false
        }
    }
}

console.log(end('Js PhP PYTHON','PYTHON'))
console.log(end('siva reddy naveen','reddy'))