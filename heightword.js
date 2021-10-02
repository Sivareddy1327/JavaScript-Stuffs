function highestScoringWord(a)
{
    let c=[]
    let alph = "abcdefghijklmnopqrstuvwxyz"
    a = a.split(' ')
    
    for (let i = 0; i < a.length; i++)
    {
        let sum = 0
        for (let j = 0; j < a[i].length; j++)
        {
            sum = sum + alph.indexOf(a[i][j]) + 1

        }
        c.push(sum)
    }
        const max_weights=c.indexOf(Math.max(...c))
        console.log(max_weights)
    
    return a[max_weights]
}

console.log(highestScoringWord('I am siva reddy'))