/***********************************NUMBER***************************************************/
const score = 400
// console.log(score)

const balance = new Number(100)
console.log(balance);


// console.log(balance.toString().length);
// it makes the number to string and checks the number length like it is 100 is 3 

console.log(balance.toFixed(1));
// converts the number to one decimal place like it 100.0


const anotherNumber = 123.8966
console.log(anotherNumber.toPrecision(4));
// similar it takes the number to 4 decimal places

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));
// IT MAKES THE NUMBER MORE EASILY READABLE

/*************************************************************MATHSSSSSS***************************************************/

// console.log(Math);

// console.log(Math.abs(-56));
//It turns the negative number to positive number
// console.log(Math.round(5.78));
// console.log(Math.ceil(5.1));
// ceil makes the number to upper place
// console.log(Math.floor(5.99));
// ceil opposite does the floor number to lower place or lower number
// console.log(Math.min(5,7,8,3,1,100));
// console.log(Math.max(1,2,2,5,5,6,98));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max - min +1))+min );
//important formulaaaaaaaaaaaaaaa
















