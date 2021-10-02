function underToCamel(a){
    //type code here
        let temp = []
        a=a.split('_')
        for (let i = 0; i < a.length; i++)
        {
            
                let str=a[i].charAt(0).toUpperCase()+a[i].slice(1).toLowerCase()
                temp.push(str)
        
          
        }
        return temp.join('')
    }
    console.log(underToCamel('siva_reddy_naveen_reddy'))