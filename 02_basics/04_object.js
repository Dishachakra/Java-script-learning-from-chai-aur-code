// singleton object 
// const tinderUser = new Object() 

//Non singleton
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Disha"
tinderUser.isLoggedIn= "false"

// console.log(tinderUser); //{ id: '123abc', name: 'Disha', isLoggedIn: 'false' }

const regularUser = {
    email: "disha@gmail.com",
    fullname: {
        usernamefullname: {
            firstname: "disha",
            lastname: "chakraborty"
        }
    }
}
// console.log(regularUser.fullname);
/** { username: { firstname: 'disha', lastname: 'chakraborty' } } */
// console.log(regularUser.fullname.usernamefullname);
/** { firstname: 'disha', lastname: 'chakraborty' } */
// console.log(regularUser.fullname.usernamefullname.firstname);
/** disha */

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 2: "b"}

// const obj3 = { obj1, obj2}
// console.log(obj3); //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '2': 'b', '3': 'a' } }

// Method 1
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

//Method 2
const obj3 = { ...obj1, ...obj2 }
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'a' }

const users = [
    {
        id: 1,
        email: "d@gmail.com"
    },
    {
        id: 2,
        email: "a@gmail.com"
    },
]

users[1].email
// console.log(tinderUser); // { id: '123abc', name: 'Disha', isLoggedIn: 'false' }

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)); // [ '123abc', 'Disha', 'false' ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Disha' ], [ 'isLoggedIn', 'false' ] ]
/**The first option is key and the second option is value */

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); // the key or value is there -> true
/**Checking the value is there or not using  hasOwnProperty() */

// console.log(tinderUser.hasOwnProperty('isLogged')); // the key or value is there -> false


/** Object de-structure and Json api */
//de-structure
const course = {
    coursename: "Javascript",
    price: "1",
    courseInstructor: "disha"
}

// const {courseInstructor} = course // can call objetct like this
// console.log(courseInstructor); // disha

const {courseInstructor: instructor} = course // object de-structure
console.log(instructor); // calling the instructor only ->  disha

// const navbar = () => {

// }

// navbar(company = "disha")

//JSON format api
// {
//     "name": "disha",
//     "coursename": "javascript",
//     "price": "free"
// }

