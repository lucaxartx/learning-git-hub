const {readFile}=require('fs')



// using promise 
// we want to read 2 files and write one 

const getText = (path)=>{
    return new promise((resolve,reject)=>{

        readFile(path,"utf-8",(err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
        
    })
    

}

getText("modules/content/first.txt")
.then(result => console.log(result))
.catch(err => console.log(err))


