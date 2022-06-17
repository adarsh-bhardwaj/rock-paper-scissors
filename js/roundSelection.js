let roundCountElement = document.getElementById('round-count');
let playBtn = document.getElementById('play');

function roundCountOptions(i){
    let roundCountOption = document.createElement('option');
    roundCountOption.textContent = i;
    roundCountOption.value=i;
    roundCountElement.add(roundCountOption);
}
function roundCounter(){
    for(let i = 1; i <= 15; i++){
        roundCountOptions(i);
    }
}
function selectRoundCounter(){
    let roundCount = roundCountElement.value;
    sessionStorage.setItem("roundCount", roundCount);

    if(roundCount == "" || roundCount == null){
        alert("Please select a round count");  
    }
    else {
        window.location.href = "startgame.html";
    }
   
}
roundCounter();
playBtn.addEventListener('click', selectRoundCounter);