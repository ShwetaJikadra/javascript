const car=new Map([["BMW",100],["Audi",200],["Ferari",300],["TATA",400]])

car.set("Suzuki",500)
car.set("honda",600)
console.log(car)

car.get("Audi");
console.log(car.size)
car.delete("BMW");
console.log(car.entries())
console.log(car.has("Audi"))
a="";
car.forEach(function(value,key)
{
   a+=key+" - "+value+"\n";
}
)
console.log(a);