let totalRound = sessionStorage.getItem("roundCount");
let roundElement = document.querySelectorAll("[data-round]");
let computerImg = document.getElementById("computer-img");
let userScore = 0;
let computerScore = 0;
let images={
    "rock": "images/rock.png",
    "paper": "images/Paper.png",
    "scissor": "images/Scissor.png"
};

let setScoreElement = document.querySelectorAll("[data-score]");
let scoreBoardElement = document.getElementById('round-winner'); 
let displayScoreStatement = document.getElementById('display-content')
let currentRound=1;
roundElement[1].textContent = totalRound < 10 ? "0" + totalRound : totalRound;
function currentRoundCounter(){
    roundElement[0].textContent = currentRound < 10 ? "0" + currentRound : currentRound;
    currentRound++;
}
let counter = 0;

function imagesChanging(){
    displayScoreStatement.style.display ="none";
    computerImg.src=Object.values(images)[counter]
    if(counter == 2){
        counter = 0;
    }
    else{
        counter++;
    }
}



function compareOptions(userOption, computerOption){ 
    console.log(userOption+" "+computerOption);
    if(userOption == computerOption){
        return 0;
    }
    else if(userOption == "rock" && computerOption == "scissor"){
        return 1;
    }
    else if(userOption=="rock" && computerOption == "paper"){
        return -1;
    }
    else if(userOption == "paper" && computerOption == "rock"){
        return 1;
    }
    else if(userOption == "paper" && computerOption == "scissor"){
        return -1;
    }
    else if(userOption == "scissor" && computerOption == "rock"){
        return -1;
    }
    else if(userOption == "scissor" && computerOption == "paper") {
        return 1;
    }

}
let ImgInterval;
function computerOptions(e,userOption){
    e.setAttribute("onclick", "optionSelect(this)");
    let computerOptions = ["rock", "paper", "scissor"];
    let computerOption = computerOptions[Math.floor(Math.random() * computerOptions.length)];
    clearInterval(ImgInterval);
    computerImg.src=images[computerOption];
    currentRoundCounter();
    let score = compareOptions(userOption, computerOption);

    if(score == -1){
        computerScore++;
        scoreBoardElement.textContent = "Computer Win This Round"
        setScoreElement[1].textContent = computerScore < 10 ? "0" + computerScore : computerScore;
    }
    else if(score == 1){
        userScore++;
        scoreBoardElement.textContent = "You Win This Round"
        setScoreElement[0].textContent = userScore < 10 ? "0" + userScore : userScore;

    }
    else {
        scoreBoardElement.textContent = "It's Draw"
    }
    displayScoreStatement.style.display ="block";
    console.log(userScore+" "+computerScore);
}

function optionSelect(e){
    e.removeAttribute("onclick")
    let userOption = e.dataset.img;
    ImgInterval=setInterval(imagesChanging, 200);
    if(currentRound > totalRound){
        sessionStorage.setItem("userScore", userScore);
        sessionStorage.setItem("computerScore", computerScore);
        window.location.href = "result.html";
      }
    setTimeout(computerOptions, 2000,e, userOption);
}
