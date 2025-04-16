//array

const myArr = [0,1,2,7,4,5]
const myHeros = ["Spiderman,Batman"]

const myArr2 = new Array (1,2,3,4)
// there are different methods to make array above all shown

console.log(myArr[1]);

//ARRAY METHODS

myArr.push(6)
myArr.push(7)
// push means to add
myArr.pop()
//pop means to remove

// myArr.unshift(9)
// unshift adds in the starting 
// myArr.shift()
// shift delets from the starting array

console.log(myArr);
console.log(myArr.includes(9));
// includes checks in the array it is there or not
console.log(myArr.indexOf(7));
// INDEX VALUE BATATA HAII

const newArr = myArr.join()
// changes datatype to string
console.log(myArr);
console.log(typeof newArr);


// slice and splice

console.log("A" , myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1)
// includes the value of mentioned index number

console.log("B", myArr);

const myn2  = myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);
// splice includes the 1 till 3 number but its array is alsoo changedd 




