let arr=[1,2,3,4,5]
console.log(arr)
console.log("Lengh of Array is:",arr.length)
arr.push(10);
arr.push(20);
arr.push(30)
console.log(arr)

arr.pop();

console.log(arr)

arr.shift()
arr.shift()

console.log(arr)

arr.unshift(11)
arr.unshift(12)
console.log(arr)

arr2=[101,102,103]
arr3=[1011,1021,1031]
arr=arr.concat(arr2,arr3);
console.log(arr)

arr=arr.sort((a,b)=>a-b)
console.log(arr)
arr.reverse()
console.log(arr)

