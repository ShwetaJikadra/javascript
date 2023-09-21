function reverseorder(no)
{
    let len,i,rev="";
    no=no.toString();
    len=no.length;
    for(i=len-1;i>=0;i--)
    {
       rev+=no[i] ;
    }
console.log(Number(rev))
}
reverseorder(1234)



