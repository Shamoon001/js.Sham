// const tinderUser = new Object ()

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "shams"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "shams@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shams",
            lastname: "anjarwala"
        }
    }

    }

    // console.log(regularUser.fullname.userfullname.lastname);
    

const obj1 = {1: "a",2: "b" }
const obj2 = {3: "s", 5: "r"}
const obj4 = {6: "e" , 7: "s"}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign( {}, obj1, obj2,obj4) 
// console.log(obj3);
// it is used to make all the objects in one line of code 

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const  users = [
    {   
        id:1,
        email:"s@gmail.com"
    },
    {   
        id:1,
        email:"s@gmail.com"
    },
    {   
        id:1,
        email:"s@gmail.com"
    },
    {   
        id:1,
        email:"s@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// all the keys are given at the output

// console.log(Object.values(tinderUser));
// values are output

// console.log(Object.entries(tinderUser));
//entries are output


// console.log(tinderUser.hasOwnProperty("isLogedIn"));
// checks that it is present in object or not


const course = {
    coursename: "ACCPRIME",
    price: "786",
    courseInstructor:"Shamoon"
}

// course.courseInstructor

const {courseInstructor:instructor} = course
// console.log(courseInstructor);
// This is a long method
console.log(instructor);

//JSON FORMATTER MAKES THE CODE EASIER TO DECODE



