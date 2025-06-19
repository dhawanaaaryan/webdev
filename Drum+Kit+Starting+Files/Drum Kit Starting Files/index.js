// document.querySelectorAll(".drum").forEach((btn)=>{btn.addEventListener("click", () => {
//     let s=btn.innerText;
//     switch (s){
//         case "w":
//             new Audio("sounds/crash.mp3").play();
//             break;
//         case "a":
//             new Audio("sounds/tom-1.mp3").play();
//             break;
//         case "s":
//             new Audio("sounds/tom-2.mp3").play();
//             break;
//         case "d":
//             new Audio("sounds/tom-3.mp3").play();
//             break;
//     }
// })});
document.addEventListener("keypress",(event1)=>{
    let s=event1.key;
    an(s);
    switch (s){
        case "w":
            new Audio("sounds/crash.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-3.mp3").play();
            break;
    }
});

function an(k){
    let btn=document.querySelector("."+k);
    btn.style.opacity=0.5;
    setTimeout(()=>{
        btn.style.opacity=1;
    },200);
    
}