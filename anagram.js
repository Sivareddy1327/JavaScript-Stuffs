// write the function isAnagram
var isAnagram = function(test, original) {
  
    let result
    let a = test.length
    let b = original.length
    test = test.toLowerCase()
    original = original.toLowerCase()
    for(let i = 0 ; i<test.length;i++){
       if(original.includes(test[i]) && a == b)
         {
           result = true
         }
      else{
        result = false
        break;
      }
    }
    return result
  };

  console.log(isAnagram('siva','ivas'))
  console.log(isAnagram('siva','iaas'))
  console.log(isAnagram('dumble','bumble'))
  console.log(isAnagram('sivareddy','resivaddy'))
console.log(isAnagram('siva','siva'))

  let str1 = 'bumble'
  let str2 = 'dumble'

  console.log(str1.includes('d'))

  