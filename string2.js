let txt="hello how are you how"
let result=txt.replace(/How/i,"hiii");
console.log(result)
let result1=txt.replace(/how/g,"hiii");
console.log(result1)
console.log(txt.replaceAll("how","hiii"))

let s1="     shweta       ";
console.log(s1.trim())
console.log(s1.trimStart())
console.log(s1.trimEnd())
console.log(s1.padEnd(25,"1"))
console.log(s1.padStart(25,"1"))
let x=5;
x=x.toString();
console.log(x.padEnd(6,"0"))


let s="how are you guys ?"
console.log(s.charAt(5))
console.log(s.charCodeAt(2));