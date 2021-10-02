function Auth(arr,password)
{
     let auth=false
     for(let i=0;i<arr.length;i++)
     {
        console.log(arr[i],password)
        
         if(arr[i]==password)
         {
             auth = true
             console.log('siva')
             break;
         }
     }
   
     if(auth)
     {
        return 'authenticated'
     }
     else{
        return 'not authenticated'
     }
    
}

console.log(Auth(['sivaravi','naveen','sreeenu'],'naveen'))