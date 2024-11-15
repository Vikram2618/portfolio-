let mode=document.getElementById("vik");
let c="l";

mode.addEventListener("click",() =>
{
    if(c==="l")
    {
        c="d";
        document.querySelector("body").style.backgroundColor="white";
    }
    else
        {
            c="l";
            document.querySelector("body").style.backgroundColor="black";
        }
})