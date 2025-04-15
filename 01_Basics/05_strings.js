const name = "Shamsi"
const repoCount = 50

// console.log(name + repoCount + "Value"); 
//This is not readable so not to use as per good code

// console.log(`Hello my Name  is ${name} and my repo count is ${repoCount}`);

const gameName = new String ("Shamoonssbroskiee")

// console.log(gameName[1]);
// console.log(gameName.__proto__);

// console.log(gameName.length);


// console.log(gameName.toUpperCase());
// UpperCase makes all the character of string from lowercase to uppercase


// console.log(gameName.charAt(2));
// jo bhi bhi number pr character hota hai woh printout krta hai

// console.log(gameName.indexOf("e"));
// value batata hai length ki konsa character ki konsi value hai length pr

// const newString = gameName.substring(5,10)
// console.log(newString);
//substring  takes starting point and ending point and printout the between number strings


const anotherString = gameName.slice(-1,7)
console.log(anotherString);

const  newStringOne = "   shamoon   "
console.log(newStringOne);
console.log(newStringOne.trim());
//trims method does remove all the blankspacess

const url = "https://hitesh.com/shamoon%50anjarwala"
console.log(url.replace("%50" , "$"));
// replace the word meaning same does it method

console.log(url.includes("wala"));
// includes method finds the value if it is inside the string so it gives the output the true else it returns the value of false
