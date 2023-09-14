let per={
    name:"shweta",
    age:20,
    skill:"nodejs"
}


console.log(Object.keys(per).length)

//for in loop 

//with object
for(i in per)
{
    console.log(per[i])
}
//with array
let arr=[1,2,3,4,5]
for(i in arr)
{
console.log(arr[i])
}
//with string

let xx="hello how arre you ?"
console.log(xx)

for(i in xx)
{
    console.log(xx[i])
}


//for of loop

for(i of arr)
{
    console.log(i)
}

