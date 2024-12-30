
const rbtn=document.querySelector("#rock");
const pbtn=document.querySelector("#paper");
const sbtn=document.querySelector("#scissor");
let hl=document.querySelector("#hl");
let cl=document.querySelector("#cl");

let choices=['rock','paper','scissor'];
let hs=0,cs=0;

// let userChoice='';
rbtn.addEventListener("click",()=>{
console.log("You clicked on rock");

playGame('rock');

});
pbtn.addEventListener("click",()=>{
    console.log("You clicked on paper");
    playGame('paper');
    });
    sbtn.addEventListener("click",()=>{
        console.log("You clicked on scissor");
        playGame('scissors');
        });


        function compChoice(){
           return  choices[Math.floor(Math.random()*3)];
        }

        function playGame(userChoice){

           let  compTakenChoice=compChoice();
           if(compTakenChoice===userChoice)
            console.log("draw");
        else if((userChoice === 'rock' && compTakenChoice === 'scissors') ||
        (userChoice === 'scissors' && compTakenChoice === 'paper') ||
        (userChoice === 'paper' && compTakenChoice === 'rock'))
        {
        console.log("human wins");
hs++;
hl.innerText=hs;
        }
        else{
console.log("comp wins");
cs++;
cl.innerText=cs;
        }
        }

/* MY CODElet rbtn=document.querySelector("#rock");
let pbtn=document.querySelector("#paper");
let sbtn=document.querySelector("#scissor");
let para=document.querySelector("p");
let humanscr=document.querySelector("#hl");
let compscr=document.querySelector("#cl");

human=0;
b=false;
let chosen="";
let chosenc="";
let hs=0,cs=0;
if (human===0){
    human=1;
rbtn.addEventListener("click",()=>  );
   
   rbtn.addEventListener("click",()=>  
     );
     
 rbtn.addEventListener("click",()=>  );
     

}
else{
human=0;
rbtn.addEventListener("click",()=>
   
     );
    rbtn.addEventListener("click",()=>
       
      );
      
    rbtn.addEventListener("click",(b)=>
       
      );
      function playGame() {
       
    
        // Logic for win/lose/draw
        if (userChoice === compChoice) {
            result.innerText += " It's a draw!";
        } else if (
            (userChoice === 'rock' && compChoice === 'scissors') ||
            (userChoice === 'scissors' && compChoice === 'paper') ||
            (userChoice === 'paper' && compChoice === 'rock')
        ) {
            result.innerText += " You won!";
            hs++;
            humanscr.innerText = hs;
        } else {
            result.innerText += " Computer won!";
            cs++;
            compscr.innerText = cs;
        }
    }-->

//       chosenc = 'scissor';
// }(chosen==='rock'&& chosenc==='rock')
//     para.innerText="draw";


// else(chosen==='paper'&& chosenc==='paper')
//     para.innerText="draw";
// else(chosen==='scissor'&& chosenc==='scissor')
//     para.innerText="draw";
// else((chosen==='rock'&& chosenc==='scissor') || (chosen==='scissor'&& chosenc==='paper')||(chosen==='paper'&& chosenc==='rock')){
//     para.innerText="You won!";
//      hs++;
//      humanscr.innerHTML=`${hs}`;
//    }
//    else((chosen==='rock'&& chosenc==='paper') || (chosen==='scissor'&& chosenc==='rock')||(chosen==='paper'&& chosenc==='scissor')){
//     para.innerText="Computer won!";
//      cs++;
//      compscr.innerHTML=`${cs}`;
//    }
*/


/*FOR TWO PLAYERS
let rbtn = document.querySelector("#rock");
let pbtn = document.querySelector("#paper");
let sbtn = document.querySelector("#scissor");
let para = document.querySelector("#para");
let score1 = document.querySelector("#score1");
let score2 = document.querySelector("#score2");

let p1Score = 0, p2Score = 0;  // Initial scores
let p1Choice = "", p2Choice = ""; // Store choices for each player
let playerTurn = 1;  // Track whose turn it is (1 for Player 1, 2 for Player 2)

// Function to determine the winner
function determineWinner() {
    if (p1Choice === p2Choice) {
        para.innerText = "It's a draw!";
    } else if ((p1Choice === 'rock' && p2Choice === 'scissors') || (p1Choice === 'paper' && p2Choice === 'rock') || (p1Choice === 'scissors' && p2Choice === 'paper')) {
        para.innerText = "Player 1 wins!";
        p1Score++;
        score1.innerText = `${p1Score}`;
    } else {
        para.innerText = "Player 2 wins!";
        p2Score++;
        score2.innerText = `${p2Score}`;
    }
    // Reset choices for the next round
    p1Choice = "";
    p2Choice = "";
    playerTurn = 1; // Player 1's turn next
    para.innerText += "\nPlayer 1's turn!";
}

// Event listeners for both players' choices
rbtn.addEventListener("click", () => {
    if (playerTurn === 1) {
        p1Choice = 'rock';
        playerTurn = 2; // Switch to Player 2's turn
        para.innerText = "Player 2's turn! Choose rock, paper, or scissors.";
    } else if (playerTurn === 2) {
        p2Choice = 'rock';
        determineWinner();
    }
});

pbtn.addEventListener("click", () => {
    if (playerTurn === 1) {
        p1Choice = 'paper';
        playerTurn = 2; // Switch to Player 2's turn
        para.innerText = "Player 2's turn! Choose rock, paper, or scissors.";
    } else if (playerTurn === 2) {
        p2Choice = 'paper';
        determineWinner();
    }
});

sbtn.addEventListener("click", () => {
    if (playerTurn === 1) {
        p1Choice = 'scissors';
        playerTurn = 2; // Switch to Player 2's turn
        para.innerText = "Player 2's turn! Choose rock, paper, or scissors.";
    } else if (playerTurn === 2) {
        p2Choice = 'scissors';
        determineWinner();
    }
});

// Initial prompt to start the game
para.innerText = "Player 1's turn! Choose rock, paper, or scissors.";*/


/*COMPUTER AND ME
let rbtn = document.querySelector("#rock");
let pbtn = document.querySelector("#paper");
let sbtn = document.querySelector("#scissor");
let result = document.querySelector("#result");
let humanscr = document.querySelector("#hl p:nth-child(2)"); // Points for user
let compscr = document.querySelector("#cl p:nth-child(2)"); // Points for computer

let hs = 0, cs = 0;  // Initialize scores
let choices = ['rock', 'paper', 'scissors'];

// Function to get the computer's random choice
function computerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

// Function to determine the result of the game
function playGame(userChoice) {
    let compChoice = computerChoice();
    result.innerText = `Computer chose ${compChoice}.`;

    // Logic for win/lose/draw
    if (userChoice === compChoice) {
        result.innerText += " It's a draw!";
    } else if (
        (userChoice === 'rock' && compChoice === 'scissors') ||
        (userChoice === 'scissors' && compChoice === 'paper') ||
        (userChoice === 'paper' && compChoice === 'rock')
    ) {
        result.innerText += " You won!";
        hs++;
        humanscr.innerText = hs;
    } else {
        result.innerText += " Computer won!";
        cs++;
        compscr.innerText = cs;
    }
}

// Adding event listeners for each button
rbtn.addEventListener("click", () => playGame('rock'));
pbtn.addEventListener("click", () => playGame('paper'));
sbtn.addEventListener("click", () => playGame('scissors'));
*/








