// streams module used to read or write sequentially 
// writable === write data sequentially  
// readable
//duplex
//transform 

// use of stream when reading files 


const { error } = require('console');
const {createReadStream} = require('fs')
const stream=createReadStream('modules/content/big-File.txt',{highWaterMark: 90000
,encoding:'utf-8'},)//highwater marjk detemines buffer size 

stream.on('data',(result)=> {
    console.log(result);
})
stream.on('error',(err)=>{
    console.log(err);
})
