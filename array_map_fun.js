let num1=[1,2,3,7,4,2];
let num2=num1.map(myFunction)
console.log(num2);
function myFunction(value,index,array)
{
    return value*2;
}

//shellow copy