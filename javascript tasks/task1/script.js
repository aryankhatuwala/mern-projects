const inp=document.querySelector("#input");
const but=document.querySelector("#button");
const p=document.querySelector("#answer");


but.addEventListener("click",function(){
   
    var rev=0;
    var copy=inp.value;
    console.log(copy);
    while(copy>0)
    {
         var d=copy%10;
        //  console.log(d);
         rev=rev*10 +d;
        //  console.log("rev: "+rev)
         copy=Math.floor(copy/10);
        //  console.log(copy);
    }
    p.innerHTML="reverse is "+rev;
    console.log("works");
})

