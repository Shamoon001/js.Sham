function sayMyname(){
    // console.log("s");
    // console.log("h");
    // console.log("a");
    // console.log("m");
    // console.log("o");
    // console.log("o");
    // console.log("n");
    
}
sayMyname()

// function addTwoNumbers (number1,number2){
//    let result = number1 + number2
//    return number1 + number2
//    console.log("Shams");
   //Nothing can be printed before the result is returned
   
    
// }
// const result = addTwoNumbers(54,65)
// console.log("Result: ",result);
// Result stores the numbers addition

// addTwoNumbers(3,4)
// addTwoNumbers(3,null)

// The username is defined from the beginning, so the program won't enter the loop
function loginUserMessage(username){
    if(username === undefined){
        // console.log("Please Enter a username")
        // return
    }
    // return `${username} just logged In`
}


// console.log(loginUserMessage("Shams"))
// console.log(loginUserMessage());

//... this is a restOperator 
// function calculateCartPrice(value1,value2 ,...num1){
    // return num1
// }
// if i run this code so i only get the output 200
// After using ... it changes the value into array and gives the output of array
// console.log(calculateCartPrice(200,400,500,2000));

const user = {
    username: "Ali",
    prices: 169
}
function handleObject (anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username:"Shamoon",
    price:679
})
//Function plus object

const myNewArray = [200,400,1000,500,750]

function returnSecondValue(getArray){
    return getArray[3]
}

// console.log(returnSecondValue(myNewArray));
//Function plus array
console.log(returnSecondValue([200,400,500,10000]));



