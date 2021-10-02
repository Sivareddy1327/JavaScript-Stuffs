function removeDuplicate(a){
    let arr = [], arr1 = []
    for (let i = 0; i < a.length; i++)
    {
        if (arr.includes(a[i]))
        {
            console.log(arr.indexOf(a[i]))
            console.log(arr.splice(arr.indexOf(a[i],1)),'remove')
            arr.splice(arr.indexOf(a[i],1))
            console.log(arr,'delete')
        }
        else {
            arr.push(a[i])
            console.log(arr,'add')
        }
    }
    return arr
}
//console.log(removeDuplicate([10,20,20,30,40,10]))
console.log(removeDuplicate([10,20,10,20,30,40]))
let sample=[10,20,30,40]
console.log(sample.splice(0,1))