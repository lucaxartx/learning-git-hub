// file system module 

const {readFileSync,writeFileSync} = require('fs')// destructuring readfilesync an co 

console.log("start");
const first = readFileSync('modules/content/first.txt','utf8')// setting the filepath and the encoding 
const second = readFileSync('modules/content/second.txt','utf8')

console.log(first,second);// this reads the txt files 

// for creating or writting new files


writeFileSync('modules/content/result-sync.txt',//this selects the filepath and new file name 
`here is the result : ${first},${second}`,// text to be contained in new file 
{flag:"a"}//if we want to only open the file 
)
console.log("done with task ");
console.log("begin next task");