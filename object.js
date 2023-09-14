let person={
    name:"shweta",
    age:20,
    fun:function()
    {
        return `${this.name} ${this.age}`
    }
    
}
console.log(typeof(person))
console.log(person)
console.log(person,person.fun())
console.log(person.name)
console.log(person['age'])
delete person.age;
console.log(person)

///another way to creating an object

let x=new Object()
console.log(x)
x.name="shweta"
console.log(x)
x.fun=function xyz()
{
    return x;
}
console.log(x.fun())


//nested object

let employee={
    name:"skill",
    age:20,
    email:"hello@test.in",
    add:{
        city:"Amreli",
        state:"Gujrat"
    },

}
console.log(employee.add.state)


//object assign() method

let per={
    name:"shweta",
    age:20,
    skill:"nodejs"
}
let p={};
Object.assign(p,per)
console.log(p,per)

