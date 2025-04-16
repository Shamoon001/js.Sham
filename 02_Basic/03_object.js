// singleton 

const mySym = Symbol("key1")
// object literals 
const  Jsuser = {
    name : "Shams",
    fullname : "Shamsanjarwala",
    [mySym] :  "mykey1",
    age : 22,
    location : "Karachi",
    email : "shamoonzain5@google.com",
    isLoggedIn : false,
    lastLoggInDays : ["Saturday" , "Sunday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["fullname"]);
// console.log(typeof Jsuser[mySym]);

Jsuser.email = "shamoonzain@microsoft.com"
Object.freeze(Jsuser)
Jsuser.email = "alikz@gmail.com"
console.log(Jsuser);

Jsuser.greeting = function (){
    console.log("Hello Js user");  
}
Jsuser.greetingtwo = function (){
    console.log("Hello Js user");
    
}  
}


