// learning modules 
// all js  files are modules by default 
// that is you can export them see n
const {lucas} = require('./name')
const sayHi = require('./utils')
require('./addition')


sayHi(lucas)
sayHi("obi")
sayHi("jude")
// console.log(module);
// console.log(__dirname);


//ignore 

const  _=require('lodash')

const items = [[1, [2,[3,[4]]]]]

const newItem=_.flattenDeep(items)
console.log(newItem);