
// run to get big-file .txt 
const {writeFileSync} = require('fs')

for (let i=0; i<10000; i++){
    
writeFileSync('modules/content/big-File.txt',`hello ${i}\n`,{flag:'a'})

}
