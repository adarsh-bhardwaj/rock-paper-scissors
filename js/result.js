let userScore = sessionStorage.getItem("userScore");
let computerScore = sessionStorage.getItem("computerScore");
let totalRound = sessionStorage.getItem("roundCount");
let setScoreElement = document.querySelectorAll("[data-score]");
let resultDisplayElement = document.querySelectorAll("[data-item]");
setScoreElement[1].textContent = computerScore < 10 ? "0" + computerScore : computerScore;
setScoreElement[0].textContent = userScore < 10 ? "0" + userScore : userScore;

if(userScore == computerScore){
    resultDisplayElement[0].textContent = "Draw";
    resultDisplayElement[1].textContent = "Better Luck Next Time";
}
else if(userScore > computerScore){
    resultDisplayElement[0].textContent = "Congratulations";
    resultDisplayElement[1].textContent = "You won the game";
}
else{
    resultDisplayElement[0].textContent = "Sorry, Better Luck Next Time";
    resultDisplayElement[1].textContent = "You lost the game";
}

document.getElementById('play').addEventListener('click',() =>{window.location.href = "index.html"});