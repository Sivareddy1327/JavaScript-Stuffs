function findDuplicate(a) {
    let arr = [], arr1 = [],result ,flag = false
    if (a.length == 0) {
        result = 'empty array'
    }
    else {
        for (let i = 0; i < a.length; i++) {
            if (!arr.includes(a[i])) {
                arr.push(a[i])
            }   
            else if (arr.includes(a[i])) {
                
                arr1.push(a[i])
                result = arr1
                
            }
            if(!flag)
            {
                result = [].concat(arr1)
            }

        }
    }

    return result
}

console.log(findDuplicate([]))
console.log(findDuplicate([1,2,3,4,5,6]))
console.log(findDuplicate([2,6,1,,2,6,7,9]))