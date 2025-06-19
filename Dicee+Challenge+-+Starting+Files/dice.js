let rand1 = Math.floor(Math.random() * 6) + 1;
let d1=document.querySelector(".img1");
let newDice1="images/dice"+rand1+".png";
d1.src=newDice1;

let rand2 = Math.floor(Math.random() * 6) + 1;
let d2=document.querySelector(".img2");
let newDice2="images/dice"+rand2+".png";
d2.src=newDice2;

let h=document.querySelector("h1");
if(rand1>rand2){
    h.innerText="Player 1 wins!";
}
else if(rand2>rand1){
    h.innerText="Player 2 wins";
}
else{
    h.innerText="Draw!";
}