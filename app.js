let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{

    const options =["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);

    return options[randIdx];

    //Rock paper Scissor
}

const drawGame = () =>{

  
    msg.innerText = "Game was Draw, Play Again"
    msg.style.backgroundColor = " #081b31";
    
}

const showWinner = (userWin,userChoice,comChoice) =>{
    if(userWin){
       userScore++;
       userScorePara.innerText = userScore;
        msg.innerText =`You Win! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";
        
    }else{
        compScore++;
       compScorePara.innerText = compScore;
        msg.innerText = `You Lost! ${comChoice} beats Your ${userChoice}`
        msg.style.backgroundColor = "red";
        
    }
}

const playGame = (userChoice) => {
 
  //computer generated choice  
  const comChoice = genCompChoice();
 
  if(userChoice === comChoice){
        drawGame();
    //draw condition
  }else{
    let userWin = true;

    if(userChoice == "rock"){

        //scissors,paper

        userWin = comChoice== "paper" ? false : true;
    } else if(userChoice == "paper"){
         //rock,scissors
        userWin = comChoice == "scissors" ? false : true;
    }else{

        //rock ,paper

       userWin =  comChoice == "rock" ? false : true;
    }

    showWinner(userWin,userChoice,comChoice);
  }
  
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});
