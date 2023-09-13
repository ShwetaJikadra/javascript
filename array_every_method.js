const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);
console.log(allOver18)
function myFunction(value, index, array) {
return value > 18;
}
// shellow copy

