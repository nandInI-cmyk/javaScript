const accountId = 144553
let accountEmail = "nina@redchil.com"
var accountPassword = "12345"
accountCity = "purpuri"
let accountState; //js assigns value undefined to the variables that haven't been defined.

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
/* to get all the variable values printed at once*/