const {readFile,writeFile}=require('fs')

const util = require('util')// alternatively we can use this 

const readFilePromise = util.promisify(readFile)//here we see promise(fy) is inbuilt in util
const writeFilePromise = util.promisify(writeFile)


// using promise 
// we want to read 2 files and write one 

// const getText = (path)=>{
//     return new Promise((resolve,reject)=>{
//         readFile(path,"utf-8",(err,data)=>{
//         if (err) {
//             reject(err)
//         }
//         else { 
//             resolve(data)
//         }
//     })})
    

// }

// getText('modules/content/first.txt')
// .then(result => console.log(result))
// .catch(err => console.log(err))


const start = async() => {
    try {
        const first = await readFilePromise('modules/content/first.txt','utf-8')// wait for promise to resolve and only then we can access first 
        const second = await readFilePromise('modules/content/second.txt','utf-8')// since we use readfilepromise fn no need for gettext 
        console.log(first,second);
        await writeFilePromise(
            'modules/content/mind-grenade.txt',
        `This is awesome: ${first},${second}`
        )
    } catch (error) {
        console.log(error);
    }

}

start()
