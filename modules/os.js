// os  module
const { log } = require('console');
const os = require('os')

const user = os.userInfo()
console.log(user);
// return system uptime in secs 
console.log(`the system uptime is : ${os.uptime} secs `);

const {username}= user
console.log(username); 
console.log(`hello ${username}`,'your laptop has been up for a while ');

const osInfo={
    name:os.type(),
    release:os.release(),
    totalmemory:os.totalmem(),
    freememory:os.freemem()
}
console.log(osInfo)