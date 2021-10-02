function sort(a)
{
    
    for(let i=0;i<a.length;i++)
    {
        let result = a[i]
        for(let j=i+1;j<a.length;j++)
        {
            
        if(result>a[j]){
            result=a[i]
            a[i]=a[j]
            a[j] = result
        }
        }
    }
    return a
}
console.log(sort([8,2,4,9,1,6]))
console.log(sort([5, 3, 2, 8, 1, 4]))