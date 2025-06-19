let btnColors=["red","blue","green","yellow"];
let pattern=[];
let userPattern=[];
let start=false;
let level=0;
function nextS(){
    level++;
    $("#level-title").text("level "+level);
    let rand=Math.floor(Math.random()*4)
    let randcolor=btnColors[rand];
    pattern.push(randcolor);
    $("#"+randcolor).fadeOut(100).fadeIn(100);
    playSound(randcolor);
    userPattern=[];
    
}

function check(name,level){
    if(pattern[level]===name){
        console.log("sucess");
        if(level===pattern.length-1){
        setTimeout(nextS,(1000));
        }
    }
    else{
        new Audio("sounds/wrong.mp3").play();
        $("body").addClass("game-over");
        setTimeout(()=>{$("body").removeClass("game-over")},100);
        console.log("wrong");
        $("h1").text("Game Over, Press Any key to restart");
        startOver();
    }
}

function startOver(){
    start=false;
    level=0;
    pattern=[];
}

$(".btn").click(function(){
    let userChosencolor=this.id;
    userPattern.push(userChosencolor);
    playSound(userChosencolor);
    animate(userChosencolor);
    check(userChosencolor,userPattern.length-1);
});

function playSound(name){
    new Audio("sounds/"+name+".mp3").play();
}

function animate(color){
    $("#"+color).addClass("pressed")
    setTimeout(()=>{
        $("#"+color).removeClass("pressed")
    },100);
}

$(document).keypress(()=>{
    if(start===false){
        nextS();
        start=true;
    }
    
});