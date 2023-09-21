// let no=function(str)
// {
//     let i;
//     let len=str.length;
//     let ascii=[];
//     let str1=[];
//     for(i=0;i<len;i++)
//     {
//      ascii[i]=str.charCodeAt(i)
//     }
   
    
//     console.log(ascii);
// }
// no("cdab")

function fun(str)
{
   
    arr=str.split("");
    result=arr.sort().join("");
    
    console.log(result);

}
fun("jikadra");