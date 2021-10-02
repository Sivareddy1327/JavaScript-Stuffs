const promiseObj = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        const some = false
        const data = [{first : 'siva', last : 'reddy'}, {first : 'ravi', last : 'reddy'}]
        if(some)
        {
            resolve(data)
        }

        else {
            reject(new Error('something went wrong'))
        }
    }, 3000)
})

promiseObj

.then((response)=>{console.log(response)})
.catch((err)=>{console.log(err.message)})

console.log(promiseObj)