let userscore=0;
let compscore=0;

const choices= document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");
const userscop=document.querySelector("#user");
const compscop=document.querySelector("#comp");

const gencompChoice= () => {
    const options=["rock", "paper", "scissor"];
    const randIdx= Math.floor( Math.random()*3);
    return options[randIdx];
}
const drawGame = () => {
    msg.innerText="draw";
    msg.style.backgroundColor="blue";
}
const showWinner=(userWin)=>{
    if(userWin){
        userscore++;
        userscop.innerText=userscore;
        msg.innerText="you win";
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compscop.innerText=compscore;
        msg.innerText="you lose";
        msg.style.backgroundColor="red";
    }
}

const playgame=(userChoice)=> {
    const compChoice=gencompChoice();

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
          userWin=  compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin= compChoice==="scissor"?false:true;
        }
        else{
          userWin=  compChoice==="rock"?false:true;
        }
       showWinner(userWin);
    }

};


choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
        playgame(userChoice);
    });
});