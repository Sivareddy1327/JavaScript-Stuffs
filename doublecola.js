function doubleCola(a, b) {
    const x = a
    for (let i = 1; i < b; i++)
    {
        let temp = x.shift()
        console.log(temp)
        x.push(temp)
        x.push(temp)
        console.log(x)
    }
    console.log(x)
    return x[0]

}

console.log(doubleCola(['siva','ravi','sreenu','reddy','kaja'],10))