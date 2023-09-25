var num1=document.querySelector("#num1");
var num2=document.getElementById("num2");

document.getElementById("multiply").addEventListener("click",function(){
    // console.log(num1*num2);
    var res=num1.value*num2.value; 
    document.getElementById("answer").textContent=res;
})

document.getElementById("divide").addEventListener("click",function(){
    // console.log(num1*num2);
    var res=num1.value/num2.value; 
    document.getElementById("answer").textContent=num1.value/num2.value;
})