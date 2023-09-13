const numbers = [45, 4, 9, 16, 25];
let txt = "";
console.log(txt);
numbers.forEach(myFunction);
function myFunction(value, index, array) {
txt += value + " ";
}
console.log(txt);
