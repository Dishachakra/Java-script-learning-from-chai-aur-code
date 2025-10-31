// array
const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Ironman", "Thor"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr2);

// Array methods

// myArr.push(6) // [ 0, 1, 3, 4, 5, 6 ]
// myArr.pop()
// myArr.unshift(9) // [ 9, 0, 1, 3, 4, 5 ]
// myArr.shift() // [ 1, 3, 4, 5 ]
// console.log(myArr);

// console.log(myArr.includes(9)); //false
// console.log(myArr.indexOf(9)); //-1

// const newArr = myArr.join() //binding the arrays

// console.log(myArr); //[ 0, 1, 3, 4, 5 ]
// console.log(newArr); // myArr.join() -> 0,1,3,4,5
// console.log(typeof newArr); // myArr.join() -> string

//slice, splice

console.log("A ", myArr); // A  [ 0, 1, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)

console.log(myn1); // [ 1, 3 ]
console.log("B ", myArr); // B  [ 0, 1, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr); // C  C  [ 0, 4, 5 ]
console.log(myn2); // [ 1, 2, 3 ]