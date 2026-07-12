let score = "33"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


score = null

console.log(typeof score);
console.log(typeof (score));

valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


score = undefined

console.log(typeof score);
console.log(typeof (score));

valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


score = true

console.log(typeof score);
console.log(typeof (score));

valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);



/*
"33"  -> 33
"33abc" -> NaN
true -> 1 ; false -> 0

*/

let isloggedIn = "kunnal"

let booleanIsloggedIn = Boolean(isloggedIn)

console.log(booleanIsloggedIn);
