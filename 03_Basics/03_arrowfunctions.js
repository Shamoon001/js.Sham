const user = {
    username: "Shamoon",
    price: 786,

    welcomeMessage: function() {
        console.log(`${this.username},welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username="Ali"
// user.welcomeMessage()
console.log(this);


// function chai(){
//     let username = "Shamoon"
//     console.log(this.username);
    
// }
// chai()

const chai = () => {
    let username = "Shamoon"
    console.log(this.username);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 }
//These both are the ways . In curly braces using , return keyword is essential

// const addTwo = (num1, num2) =>  (num1 + num2)
// in round braces no need of return statement
const addTwo = (num1, num2) =>  ({username: "Shamoon"})

console.log(addTwo (3,4))
    
    