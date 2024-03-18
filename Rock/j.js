let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genCompChoice=()=>
{
       const options=['rock','paper','scissors'];
       const randIdx=Math.floor(Math.random()*3);
       return options[randIdx];
}
       const drawGame=()=>
       {
        console.log("game was draw");
        msg.innerText="Game was Draw. Play again";
       }
const showWinner=(userWin,userChoice,compChoice)=>
{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win!${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=userScore;
        msg.innerText= `You lost.${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>
{
    
    //Generate computer choice
    const compChoice=genCompChoice();
    if(userChoice===compChoice)
    {
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock")
        {
            compChoice==="paper"?false:true;
        }
        else if(userChoice==='paper')
        {
            compChoice==='scissors'?false:true;
        }
        else{
            compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice)=>
{
    console.log(choice);
    choice.addEventListener("click",()=>
    {
        const userChoice=choice.getAttribute("id");
       playGame(userChoice);
      });
});
