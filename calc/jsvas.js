function displays(value)
{
    let x;
    const display = document.getElementById("display");
    display.value += value;
  

}

function ac() {
    const display = document.getElementById("display");
    display.value = '';
}

function ans()
{
    const display=document.getElementById("display");
   display.value=eval(display.value);

}
function deletes()
{
    const display=document.getElementById("display");
   let x=display.value;
   display.value=x.substring(-1,x.length-1)
}

