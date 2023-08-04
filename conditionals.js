// console.log(strictA == strictB);
true // because 2 "==" equals True
// console.log (strict A === strictB);
False // because 3 "===" equals false

let age = 22;
if (age > 18 && age <= 65) {
    console.log("You meet the age requirement");
} else {
    console.log("You don't meet the age requirement");
}

age = 22;
let check = age > 50 ? "over age of 50": "under age of 50";
console.log(check);


let day = "Thursday";
switch (day) {
  case 0 :
    console.log(`Value is 4`);
    break;
  case 5:
    console.log(`Value is 5`);
    break;
  case 6:
    console.log(`Well...`);
  case 7:
  case 8:
  case 9:
  case 10:
    console.log(`Value is greater than 5`);
    break;
  default:
    console.log(`Sorry can't find the range you're looking for...`);
}
