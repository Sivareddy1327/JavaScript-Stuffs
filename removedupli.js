function removeDuplicatesFromSorted(a) {
    const a1 = [], obj = {}
    if (a.length == 0)
    {
    return 0
    }
    else {
        a.forEach((ele) => {
            if (!a1.includes(ele))
            {
            a1.push(ele)
            }
            console.log(a1)
        obj.hasOwnProperty(ele) ? obj[ele]++
                : obj[ele] = 1
        })
        console.log(obj)
        const findNumbers = Object.keys(obj).filter(ele =>obj[ele] <=2) 

        
                return findNumbers.length + a1.length 
            
        }
}

console.log(removeDuplicatesFromSorted([1,1,2,2,2,3]))
console.log(removeDuplicatesFromSorted([4,4,4,4,4,4,4,4,4,4]))
console.log(removeDuplicatesFromSorted([1,2,3,4,5,6]))
