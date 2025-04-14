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
