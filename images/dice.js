var num1=Math.floor(Math.random()*6)+1;

document.querySelector(".img1").setAttribute("src","images/dice"+num1+".png")

var num2=Math.floor(Math.random()*6)+1;

document.querySelector(".img2").setAttribute("src","images/dice"+num2+".png")
if(num1==num2){
    document.querySelector("h1").innerText="Draw"
}
else if(num1>num2){
    document.querySelector("h1").innerText="Player 1 Win"
}
else{
    document.querySelector("h1").innerText="Player 2 win"
}
function myButton(){
    location.reload();
}