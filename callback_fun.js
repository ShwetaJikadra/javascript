function hello()
{

    console.log("Hello world")
}
function skill(s,callback)
{
    console.log("hi..........",s)
    callback();
}

skill("peter",hello)