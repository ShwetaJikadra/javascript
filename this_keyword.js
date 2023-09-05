let person={
    firstname:"Skill",
    lastname:"Qode",
    age:12,
    fullname:function()
    {
        return this.firstname+" "+this.lastname;
    }
}

console.log(person)
console.log(person.age)
console.log(person.fullname());