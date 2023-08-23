const data=new Set(["mango","banana","grapes"]);
console.log(data.add('guava'));
console.log(data.delete('mango'))

a="";
data.forEach(function(value)
{
   a+=value+"\n";
}
)
console.log(a);
console.log(data.entries());
console.log(data.size)
console.log(data.has('grapes'))

//string litrels


let x=`hello
how are you`
console.log(x)

let y=50;
console.log("This values is ${y}")
