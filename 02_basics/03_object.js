// singleton

//object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "disha",
    age: 27,
    [mySym]: "mykey1",
    location: "kolkata",
    email: "disha@gmail.com",
    isLoggedin: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "disha@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "disha@microsoft.com"
// console.log(JsUser);
/**
 {
  name: 'disha',
  age: 27,
  location: 'kolkata',
  email: 'disha@chatgpt.com',
  isLoggedin: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  Symbol(key1): 'mykey1'
}
 */

JsUser.greeting = function()
{
    console.log("Hello Js User");
}

// console.log(JsUser.greeting); // [Function (anonymous)]
console.log(JsUser.greeting()); // Hello Js User

JsUser.greetingTwo = function()
{
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greetingTwo());
