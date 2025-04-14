//  *********************************************Primitive Types***************************///

// 7 types : String,Boolean,Integer,Number,null,undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp= null
let useremail ;

const id = Symbol("123")
const anotherid = Symbol('123')
// both the id and anotherid is not same
console.log(id === anotherid);

const Bignumber = 3456748499494947455555n


// ****************************************** Reference (Non Primitive Types)******************//

//Array,Objects,Functions

const heros = ["Mom","Dad","Brother","Another Brother from another mother"]
let myObj = {
    name : "Ali",
    age:21,
}

const myFunction = function(){
    console.log("Hello World");
    }
console.log(typeof heros);

// ************************** STACK (PRIMITIVE) AND HEAP (NON-PRIMITIVE) MEMORY *****************************************//
// PRIMITIVE VALUES GOES IN THE STACK SO IT GIVES THE COPY 

let myYoutubename = "ShamoonAnjarWala"

anothername = myYoutubename
anothername = "Shamoon Livelihood"
console.log(myYoutubename);
console.log(anothername);

// This is the reason why the myYoutubename and anothername has different output because it is using stack 

let userOne = {
    email : "shamoonzain5@gmail.com",
    easypaisa : "user@ajsfk",
}
let userTwo = userOne

userTwo.email="shamoonzain@google.com"

console.log(userOne.email);
console.log(userTwo.email);

//HEAP GIVES THE REFERFERENCE SO IT MEANS THE CHANGES HAS BEEN DONE IN THE ORIGINAL VALUES

