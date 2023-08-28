let x=123;
console.log(x.toString())
console.log((123).toString())
console.log((100+23).toString())

let x1=9.656;
console.log(x1.toExponential())
console.log(x1.toExponential(2))
console.log(x1.toExponential(4))
console.log(x1.toExponential(6))

console.log(x1.toFixed(0))
console.log(x1.toFixed(2))
console.log(x1.toFixed(4))
console.log(x1.toFixed(6))

console.log(x1.toPrecision())
console.log(x1.toPrecision(2))
console.log(x1.toPrecision(4))
console.log(x1.toPrecision(6))

let a=123;
console.log(a.valueOf())
console.log((123).valueOf())
console.log((100+23).valueOf())



console.log(Number(true))
console.log(Number(false))
console.log(Number("10"))
console.log(Number(" 10"))
console.log(Number("10 20 30"))
console.log(Number("10.10"))
console.log(Number("-10.10"))
console.log(Number("10 "))
console.log(Number("john"))

console.log(parseInt("-10"))
console.log(parseInt("-10.33"))
console.log(parseInt("10.33"))
console.log(parseInt("10 6"))
console.log(parseInt("10 Year"))
console.log(parseInt("year 6"))

console.log(parseFloat(-10))
console.log(parseFloat(10.33))
console.log(parseFloat("year 10"))
console.log(parseFloat("10.33"))

console.log(Number.isInteger(1234567890))
console.log(Number.isSafeInteger(66000))//-32767 to +32768