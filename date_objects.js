let now = new Date();

console.log("Current time: ", now.toString());
console.log(now);

//creating a specific date
let independenceDay = new Date(2025,7,15);
console.log("Independence Day: ", independenceDay.toDateString());

//creating a specific date with time
let myFirstMorning = new Date(2001,7,10,9,30,0);
console.log("My first morning: "+ myFirstMorning.toString());


//date functions

console.log("Full year: ", now.getFullYear());
console.log("Month: ", now.getMonth());
console.log("Date: ",now.getDate());
console.log("Hours", now.getHours());
console.log("Minutes: ",now.getMinutes());
console.log("Seconds: ", now.getSeconds());
console.log("Milliseconds: ", now.getMilliseconds());
console.log("Time: ", now.getTime());

//helpers of the month

const monthNames= ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
console.log("Month name: ", monthNames[now.getMonth()]);


//get components in UTC
console.log("UTC Hours: ", now.getUTCHours());
