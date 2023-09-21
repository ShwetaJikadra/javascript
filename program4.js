function longest(arr)
{
   let new_arr=[];
   new_arr=arr.split(" ");
   let len=new_arr.length
   let l=0;
   let w=""
   for(i=0;i<len;i++)
   {
     if(new_arr[i].length>l)
     {
      l=new_arr[i].length;
      w=new_arr[i];
     }
   }
   
   console.log(w);



}
longest("hello how are you")