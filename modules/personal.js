// const {uptime} = require('os')
// let insecs=uptime
// function uptimeInHrs(uptimeInSecs){
//     let upTimeInMins= uptimeInSecs/60 
//     const inHrs=upTimeInMins/60
//     return inHrs;
// }
// console.log(uptimeInHrs(insecs));
// console.log(Date.now())

const os = require('os');

// Get the current time when the application starts
const startTime = Date.now();

// Function to calculate and format the uptime
function getUptime() {
const uptimeMilliseconds = Date.now() - startTime;
const uptimeSeconds = Math.floor(uptimeMilliseconds / 1000);
const uptimeMinutes = Math.floor(uptimeSeconds / 60);
const uptimeHours = Math.floor(uptimeMinutes / 60);
const uptimeDays = Math.floor(uptimeHours / 24);

    return `${uptimeDays} days, ${uptimeHours % 24} hours, ${uptimeMinutes % 60} minutes, ${uptimeSeconds % 60} seconds`;
}

// Display the uptime
console.log(`Device Uptime: ${getUptime()}`);
