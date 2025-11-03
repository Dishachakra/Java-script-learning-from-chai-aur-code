const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "batman", "flash"]

// marvel.push(dc_heroes); // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]
// //the element of dc come to marvel as a fourth elemnt its not merging its just pushing the elements
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes) // [ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]
// console.log(allHeroes);

// const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes); //[ 'thor', 'ironman', 'spiderman', 'superman', 'batman', 'flash' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5]]] //if this kind a array come how to handle this given below
const real_another_array = another_array.flat(Infinity) 
/** Answer
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
] 
*/ 
// console.log(real_another_array);

console.log(Array.isArray("Hitesh")); //check whether it is array or not -> false
console.log(Array.from("Hitesh")); // convert to array -> [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name: "disha"})); // cant convert the object bcz it havent mention what to convert key or value -> []

let score1 = 100
let score2 = 200
let score3 = 300
//combining the variables in one array and returns a new array from a set of elements. 
console.log(Array.of(score1, score2, score3)); // Array.of(score1, score2, score3) -> [ 100, 200, 300 ]