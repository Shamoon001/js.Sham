
// var c=300
let a = 300
if(true) {
    let a = 10
    const b =20
    console.log("Inner: ",a);
    
}

console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "shamoon"

    function two(){
        const website = " google"
        console.log(username);
    }
    // console.log(website);
    
    two()
}

// one()

if (true) {
    const username = "Shamoon"
    if (username=== "Shamoon"){
        const website = " google"
        console.log(username + website); 
    }
    // console.log(website);   
}
// console.log(username);

/// interesting //////////////////////////////////////////////
console.log(addone(7));
function addone(num){
    
    return num + 1
}
//  addone(7)
console.log(addTwo(7));
 const addTwo = function (num) {
    return num + 2
 }

//  addTwo(7)

