//++++++++++++++ Numbers ++++++++++++++++++++++++++++++

const score = 400
// console.log(score);
const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //values returns a string representing this number using with the specified number of decimal places
//eg it will return 100.00 if i givw 1 it will return 100.0

// const otherNumber = 23.8966 //return 23.9
const otherNumber = 123.8966 //return 124
// const otherNumber = 1123.8966 //return 1.12e+3 rest value will be in exponential
// const otherNumber = 1123.8966 //return 1124 when otherNumber.toPrecision(4)
// console.log(otherNumber.toPrecision(3));

/**Here to use of toLocaleString() bcz it will
 * give comas between the numbers 1,000,000 like this
 * but here for india number system we have to use like this
 * hundreds.toLocaleString('en-IN'),
 * but in foreign or USA
 * we can use like this
 * hundreds.toLocaleString('en')
 */
const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++ Maths ++++++++++++++++++
// console.log(Math.abs(-4)); //negative number come positive
// console.log(Math.round(4.6)); //roud figure value return 5
// console.log(Math.ceil(4.2));//upper value return 5
// console.log(Math.floor(4.2)); // lower value return 4
// console.log(Math.min(4, 3, 6, 8)); //find min value
// console.log(Math.max(4, 3, 6, 8)); //find max value

// console.log(Math.random()); // It will returns value always between 0 - 1
// console.log(Math.random() * 10 + 1 ); // It will returns value always between 0 - 1
/**Here +1 is used for the possibilities of 0 can come after point (.) like
 * Math.random() // return 0.19139003951425382
 * Math.random() * 10 + 1 // return 8.653222666014631
 * Or another process below
 */

console.log((Math.random() * 10) + 1 ); // It will returns value always between 0 - 1

const min = 10
const max = 20

console.log(Math.floor( Math.random() * ( min * max + 1 )) + min);
/**Explanation:
 * The math floor is used to set up the
 * single value the lower value the math random
 * will give the range between 0-1 like 0.1, 0.3 etc
 * the min and max setting up for the range creation
 * th +1 is given the value shoudnt go at 0 at the left
 * + min is for the value with high return like 17, 203 etc
 */