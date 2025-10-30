// date always count milisecond
// Dates

let myDate = new Date()
// console.log(typeof myDate); // the type of to date is object
// console.log(myDate.toString()); // Thu Oct 30 2025 17:02:00 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); // Thu Oct 30 2025
// console.log(myDate.toISOString()); // 2025-10-30T11:32:51.548Z
// console.log(myDate.toJSON()); // 2025-10-30T11:33:13.071Z
// console.log(myDate.toLocaleDateString()); // 30/10/2025
// console.log(myDate.toLocaleString()); // 30/10/2025, 5:03:57 pm
// console.log(myDate.toLocaleTimeString()); // 5:04:15 pm
// console.log(myDate.toTimeString()); // 17:04:40 GMT+0530 (India Standard Time)

// let myCreatedDate = new Date(2023, 0, 23) //if the vlaue (2023, 12, 23) it will return (Tue Jan 23 2024)
// console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023 (in javascript the month started with 0 if the month is single it ctaches the array mean Y/M/D but when it YY/MM/DD the value of the month start from 1 means january)

// let myCreatedDate = new Date(2023, 0, 23, 5, 3) // the last 5, 3 is for time and minute
// console.log(myCreatedDate.toLocaleString()); // 23/1/2023, 5:03:00 am

// let myCreatedDate = new Date("2023-01-14") // (for outside india) YY/MM/DD - here the month will not count 0 for january because it has two MM we have to give 01 for january
// console.log(myCreatedDate.toLocaleString()); //14/1/2023, 5:30:00 am

let myCreatedDate = new Date("01-14-2023") // (for india we follow this pattern) MM/DD/YY - here the month will not count 0 for january because it has two MM we have to give 01 for january
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp); // 1761825452636
// console.log(myCreatedDate.getTime()); // 1673634600000
// console.log(Date.now() / 1000); // 1761825530.596
// console.log(Math.floor(Date.now() / 1000)); // 1761825564

let newDate = new Date()
// console.log(newDate); // 2025-10-30T12:00:30.619Z
// console.log(newDate.getMonth()); // Month- 9, the month is 9 means october bcz the months starting from 0 mean January
// console.log(newDate.getDate()); // Day- 30
// console.log(newDate.getFullYear()); // Year- 2025
// console.log(newDate.getMonth() +1); // Month- 10, by adding +1 at last will return exact month bcz the months starting from 0 mean January

let veryNewDate = newDate.toLocaleString('default', {
    weekday : "long",
})
console.log(veryNewDate);  // Thursday
// to make the suggestion u can press ctrl + spce