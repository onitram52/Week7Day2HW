//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberweis:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function listDishes(obj) {
    for (const key in obj) {
        if (Array.isArray(obj[key])) {
            obj[key].forEach(val => console.log(val));
        } else if (typeof obj[key] === 'object') {
            displayValues(obj[key]);
        } else {
            console.log(obj[key]);
        }
    }
}

listDishes(person3);
//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.printInfo = (height, weight) => 
        console.log(`${this.name} is ${this.age} years old. They are ${height} inches tall and weigh ${weight} pounds.`)

    this.increaseAge = () => {
        this.age += 1
    }

}

let jeff = new Person('Jeff', 25);
jeff.increaseAge();
jeff.increaseAge();
jeff.printInfo(48, 300)

let jim = new Person('Jimmy', 8);
jim.increaseAge();
jim.increaseAge();
jim.printInfo(75, 200)




// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 




// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const checkStringLength = (str) => {
    return new Promise((resolve, reject) => {
        if (str.length > 10) {
        resolve("Big word");
        } else {
        reject("Small number");
        }
    });
};
  
checkStringLength("beeeeeeeeeeeeeeg")
.then((result) => console.log(result))
.catch((error) => console.log(error));

checkStringLength("smol")
.then((result) => console.log(result))
.catch((error) => console.log(error));

// Codewars stuff
// 1
// We need a function that can transform a string into a number. What ways of achieving this do you know?
const stringToNumber = (str) => {
    return Number(str);
};
  
let num = stringToNumber("3.14");
console.log(num);
//2
/** Complete the findNextSquare method that finds the next integral perfect square after the one passed as 
 * a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
 * If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter
 *  is non-negative.*/
const findNextSquare = (sq) => {
    let root = Math.sqrt(sq);
    if (root % 1 === 0) {
        return Math.pow(root + 1, 2);
    } else {
        return -1;
    }
};
  
console.log(findNextSquare(100));

console.log(findNextSquare(625))
