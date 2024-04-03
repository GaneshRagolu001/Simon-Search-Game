let gamesequence=[];
let usersequence=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let highestScore=0;
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
     if(started==false){
        console.log("game is started");
        started=true;
        levelup();
    }
});
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelup(){
    usersequence=[];
    level++;
    h2.innerText=`Level ${level}`;

    //choosing random button
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    gamesequence.push(randColor);
    console.log(gamesequence);
    let randbtn=document.querySelector(`.${randColor}`);
    gameflash(randbtn);
}
function checkans(idx){
    if(usersequence[idx]==gamesequence[idx]){
        if(usersequence.length==gamesequence.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`Game Over! your score was <b>${level}</b> <br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        highestScore = Math.max(highestScore,level);
        h3.innerText=`Highest Score is ${highestScore}`;
        reset();
    }
}
function btnpress(){
    let btn=this;
    userflash(btn);
    let userColor=btn.getAttribute("id");
    usersequence.push(userColor);
    checkans(usersequence.length-1);
}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    gamesequence=[];
    usersequence=[];
    level=0;
}