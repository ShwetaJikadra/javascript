function fun(str)
{
    let arr=[];
  let new_arr=[];
    arr=str.split(" ");
    for(i=0;i<arr.length;i++)
    {
      new_arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
    }
    console.log(new_arr)
}
fun("hi wello how")