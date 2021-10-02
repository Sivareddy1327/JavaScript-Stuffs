function random(arr){
const random = arr[Math.floor(Math.random()*arr.length)]
return random
}
console.log(random([20,30,40,50]))