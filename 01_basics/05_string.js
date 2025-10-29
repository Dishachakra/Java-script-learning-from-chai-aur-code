const name = "disha"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// const gameName = new String('disha')
// const gameName = new String('disha-ch')
const gameName = new String('disha-ch-dev')


// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase()); //by using this method it will not change the original value
// console.log(gameName.charAt(2)); // to see the position of which character
// console.log(gameName.indexOf('s')); //to see the index of the character

// const newString = gameName.substring(0, 4) //the last value you putting is not including mean 4
// console.log(newString);

// const anotherString = gameName.slice(-7 , 4)
// console.log(anotherString);

const newString1 = "  Disha  "
console.log(newString1);
console.log(newString1.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace("%20", "-"));

// console.log(url.includes('disha')); //the value will return false bcz there no word like this in url
console.log(url.includes('hitesh')); //the value will return true bcz there is a word like this in url

console.log(gameName.split('-'));