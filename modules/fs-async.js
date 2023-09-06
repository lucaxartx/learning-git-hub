const {readFile,writeFile}=require('fs')

console.log("start");
readFile('modules/content/first.txt', 'utf8' , (err, result)=>{

    if(err){
        console.log(err)
        return ;
    }
   // setting up callback help

const first= result 
readFile('modules/content/second.txt', 'utf8' ,(err, result)=>{
    if(err){
        console.log(err)
        return ;
    }
    })
    const second= result 
    writeFile('modules/content/result-async.txt',
    `here is the result : ${first},${second}`,
    (err,result)=>{
        if (err){

            console.log(err);
            return;
        }
    
        // console.log(result);
        console.log("done with task");
    })
})

console.log("begin next task ");
