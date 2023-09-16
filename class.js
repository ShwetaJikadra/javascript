class person
{
    constructor(name,age)
    {
        this.name=name;
        this.age=age
    }
    hello()
    {
        return (`${this.name}+${this.age}`);
    }
}

let p1= new person("peter",25);
console.log(hello())