const {readFile}=require('fs')



// using promise 
// we want to read 2 files and write one 

const getText = (path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,"utf-8",(err,data)=>{
        if (err) {
            reject(err)
        }
        else { 
            resolve(data)
        }
    })})
    

}

// getText('modules/content/first.txt')
// .then(result => console.log(result))
// .catch(err => console.log(err))


const start = async() => {
    try {
        const first = await getText('modules/content/first.txt')// wait for promise to resolve and only then we can access first 
        const second = await getText('modules/content/second.txt')
        console.log(first,second);
        
    } catch (error) {
        console.log(error);
    }

}

start()

