// function hello()
// {
//     console.log("How re you ????");
// }
// setTimeout(hello,2000)
// console.log("I am fine")

// setTimeout(function(){
//     console.log("How are you !!!!")
// },1000)

setInterval(times,2000)

function times()
{
    let date=new Date()
    console.log(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+":"+date.getMilliseconds())
}
