// events module 
const eventEmitter = require('events')
const customEmitter = new eventEmitter //we use new since its a class 

customEmitter.on('response',(name,id)=>{
    
    console.log(`data received user ${name} with id:${id}`);
})
customEmitter.on('response',()=>{
    console.log('some other logic');
})
customEmitter.emit('response','lucas',33)