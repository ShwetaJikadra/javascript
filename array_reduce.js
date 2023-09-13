
function myFunction(value, index, array) {
return value > 18;
}
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);
console.log(someOver18)