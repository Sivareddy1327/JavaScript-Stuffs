function capitalize(str)
{
    let result=[]
    str=str.split(' ')
    console.log(str.length)
    for(let i=0;i<str.length;i++)
    {
        const newstr = str[i].charAt(0).toLowerCase()+str[i].slice(1).toUpperCase()
        result.push(newstr)

    }
    return result.join(' ')
}

console.log(capitalize('Siva Reddy raveendra reddy'))
let siva = 'REDDY'
console.log(siva.charAt(0).toUpperCase()+siva.slice(1).toLowerCase())