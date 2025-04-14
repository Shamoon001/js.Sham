const accountId = 14453
let accountEmail = "shamoonnzainn5@gmail.com"
var accountPassword ="12345"
accountCity = "Karachi"

//accountId = 2//

accountEmail = "alibitch@gmail.com"
accountPassword = "Eggburger1222"
accountCity = "Lahore"
console.log(accountId);

/* 
Prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity])