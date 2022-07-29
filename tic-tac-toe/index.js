let newGAmeDiv = document.getElementById("newGameDivStart");
let maindDiv = document.getElementById("mainDiv");
let nGvsCPU = document.getElementsByClassName("NGvsCPU")[0];
let ngvsPlayer = document.getElementsByClassName("ngvsPlayer")[0];
let divNgvsPlayer = document.getElementsByClassName("lastDivMultiplayer")[0];
let divNgvsCpu = document.getElementsByClassName("lastBigDivSolo")[0];
let xTurn = document.getElementById("xTurn");
let oTurn = document.getElementById("oTurn");
let restartSquare = document.getElementsByClassName("restartimg")[0];
let parentDiv = document.getElementsByClassName("parent")[0];
let counterDivX = document.getElementsByClassName("counterDivX")[0];
let counterDivTies = document.getElementsByClassName("counterDivTies")[0];
let counterDivXcpu = document.getElementsByClassName("counterDivXcpu")[0];
let counterDiv = document.getElementsByClassName("counterDiv")[0];
let counterDivTie = document.getElementsByClassName("counterDivTie")[0];
let counterDivXcp = document.getElementsByClassName("counterDivXcp")[0];
let xWhite = document.getElementsByClassName("xWhite")[0];
let oDarkImg = document.getElementsByClassName("oDarkImg")[0];
let spanX = document.getElementById("spanX");
let spanO = document.getElementById("spanO");
let p1Span = document.getElementById("p1Span");
let p2Span = document.getElementById("p2Span");
let parent = document.getElementsByClassName("parent")[0];
let xAndODiv =  document.getElementsByClassName("xAndODiv");
let youWonDiv = document.getElementsByClassName("youWonDiv")[0];
let ohNoYouLost = document.getElementsByClassName("ohNoYouLost")[0];
let xYouDiv = document.getElementById("xYouDiv");
let xCpuDiv = document.getElementById("xCpuDiv");
let xInp2 = document.getElementsByClassName("xInp2")[0];
let oInp1 = document.getElementsByClassName("oInp1")[0];
let youSpan = document.getElementsByClassName("youSpan")[0];
let cpuSpan = document.getElementsByClassName("cpuSpan")[0];
let player1Wins = document.getElementsByClassName("player1Wins")[0];
let XtakesRoundText = document.getElementsByClassName("XtakesRoundText")[0];
let player2Wins = document.getElementsByClassName("player2Wins")[0];
let gameMode = "CPU";
let ohNoText = document.getElementsByClassName("ohNoText")[0];
let ohNoyouLostId = document.getElementById("ohNoyouLostId");
let playerChoise = " ";
let ohNoyoulostIdFirst = document.getElementById("ohNoyoulostIdFirst");
let tiedGame = document.getElementsByClassName("tiedGame")[0];
let checkTiedTruth = false;
let parents = document.querySelectorAll(".xAndODiv");
let boxCounter = 0;

let arr = [0,1,2,3,4,5,6,7,8];
function findFilledBoxes(number){
 let index = arr.findIndex((element) => element == number)
 arr.splice(index,1);
//  console.log(arr);
}
function autoFill(){
    let randomNumber = arr [Math.floor(Math.random() * arr.length)];
    parents[randomNumber].innerHTML = "<img class='ticTacO' src='./assets/ofordiv.png' />";
    findFilledBoxes(randomNumber);
    count++;
}
function autoFillO(){
    let randomNumber = arr [Math.floor(Math.random() * arr.length)];
    parents[randomNumber].innerHTML = "<img class='ticTAcX' src='./assets/x for div.png'  />  ";
    findFilledBoxes(randomNumber);
    count++;
}



oTurn.style.display = "none";
counterDivX.innerHTML = '0';
counterDivTies.innerHTML = '0';
counterDivXcpu.innerHTML = '0';
counterDiv.innerHTML = '0';
counterDivTie.innerHTML = '0'
counterDivXcp.innerHTML = '0'

function test(event){
    
        if(count%2 == 0){
            event.target.classList.add("tictacDivs")
        } else{
            event.target.classList.add("tictacDivsO");
        }
    
   
}



nGvsCPU.addEventListener('click', function (event) {
    newGAmeDiv.style.display = "none";
    maindDiv.style.display = "flex";
    gameMode = "CPU"

});

ngvsPlayer.addEventListener('click', function (event) {
    newGAmeDiv.style.display = "none";
    maindDiv.style.display = "flex";
    divNgvsCpu.style.display = "none";
    divNgvsPlayer.style.display = "flex";
    gameMode = "player"
    

    
});

oDarkImg.addEventListener('click', function (event) {
    p1Span.innerHTML = "(p2)";
    p2Span.innerHTML = "(p1)";
    cpuSpan.innerHTML= "(YOU)";
    youSpan.innerHTML= "(CPU)";
    playerChoise = 'O'
    autoFillO();
});

xWhite.addEventListener('click', function (event) {
    p1Span.innerHTML = "(P1)";
    p2Span.innerHTML = "(P2)";
    playerChoise = 'X'

});

let count = 0;
for(let i=0; i<parents.length; i++){
    parents[i].onclick =  function (event) {
        // console.log(event.target.getAttribute("rameErqvas"));
         parents[i].onclick=function(){};
         if(event.target.classList.contains('xAndODiv')){
             if(count%2 == 0){
             event.target.innerHTML = "<img class='ticTAcX' src='./assets/x for div.png'  />  ";
                oTurn.style.display = "block";
                xTurn.style.display = "none";
                findFilledBoxes(event.target.getAttribute("rameErqvas"));
                if(gameMode === "CPU" && playerChoise === 'X'){
                   
                    autoFill();
                    
                  
                }
                
            } else{
                event.target.innerHTML = "<img class='ticTacO' src='./assets/ofordiv.png' />";
                oTurn.style.display = "none";
                xTurn.style.display = "block";
                findFilledBoxes(event.target.getAttribute("rameErqvas"));
                if(gameMode === "CPU" && playerChoise === 'O'){
                   
                    autoFillO();
                    
                  
                }
            }
                 
        }
             
             count++;
             checkwinner();
     
         }
         
    }





function check(){
    if(playerChoise === 'X'){
        ohNoYouLost.style.display = "flex";
        checkTiedTruth = true;
    }else if(spanO.innerHTML == "O" && p2Span.innerHTML == "(p1)" && gameMode!=="CPU"){
        ohNoYouLost.style.display = "flex";
        ohNoyoulostIdFirst.innerHTML = "Player 1 WINS!";
        checkTiedTruth = true;
    }else if(spanO.innerHTML == "O" && p2Span.innerHTML == "(P2)" && gameMode!=="CPU"){
        ohNoYouLost.style.display = "flex";
        ohNoyoulostIdFirst.innerHTML = "Player 2 WINS!";
        checkTiedTruth = true;
    }else  if(spanO.innerHTML == "O" && cpuSpan.innerHTML == "(YOU)" && gameMode =="CPU" ) {
        ohNoYouLost.style.display = "flex";
        ohNoText.innerHTML = "YOU WON!";
        checkTiedTruth = true;
    } 
    
    
    
}

function checkwinnerXPlayer(){
    if(spanX.innerHTML == "X" && youSpan.innerHTML == "(CPU)" && gameMode =="CPU"){
        if (playerChoise === 'O') {
            youWonDiv.style.display = "flex"; 
            ohNoyouLostId.innerHTML = "OH NO, YOU LOST...";
            checkTiedTruth = true;
        } 
    } else if(spanX.innerHTML == "X" && p1Span.innerHTML == "(P1)" && gameMode!=="CPU"){
        player1Wins.style.display = "flex";
        checkTiedTruth = true;

    }else if(spanX.innerHTML == "X" && p1Span.innerHTML == "(p2)" && gameMode!=="CPU"){
        player2Wins.style.display = "flex";
        checkTiedTruth = true;
    }else if(spanX.innerHTML == "X" && youSpan.innerHTML == "(You)" && gameMode =="CPU" ) {
        youWonDiv.style.display = "flex"; 
        checkTiedTruth = true;  
    }
   
   

}
// console.log(parents.length);

function checkTiedGame(){
    let counter = 0;
    for(let i=0; i<=parents.length; i++){
        if(parents[i]?.innerHTML !== "" ){
            counter++;
            
        
        }
        if(counter===10 && checkTiedTruth === false ){
            tiedGame.style.display = "flex";
        }
    }
}
function checkwinner(){
    
    
    if(xAndODiv[0].firstChild?.classList.contains("ticTAcX") 
        && xAndODiv[1].firstChild?.classList.contains("ticTAcX")
        && xAndODiv[2].firstChild?.classList.contains("ticTAcX") ){
            checkwinnerXPlayer();
    }
    
    if(xAndODiv[3].firstChild?.classList.contains("ticTAcX") 
        && xAndODiv[4].firstChild?.classList.contains("ticTAcX")
        && xAndODiv[5].firstChild?.classList.contains("ticTAcX") ){
            checkwinnerXPlayer();
        }
    if(xAndODiv[6].firstChild?.classList.contains("ticTAcX") 
        && xAndODiv[7].firstChild?.classList.contains("ticTAcX")
         && xAndODiv[8].firstChild?.classList.contains("ticTAcX") ){
            checkwinnerXPlayer();
    }
    if(xAndODiv[0].firstChild?.classList.contains("ticTAcX") 
        && xAndODiv[3].firstChild?.classList.contains("ticTAcX")
        && xAndODiv[6].firstChild?.classList.contains("ticTAcX") ){
            checkwinnerXPlayer();
    }
    if(xAndODiv[1].firstChild?.classList.contains("ticTAcX") 
        && xAndODiv[4].firstChild?.classList.contains("ticTAcX")
        && xAndODiv[7].firstChild?.classList.contains("ticTAcX") ){
            checkwinnerXPlayer();
    }         
    if(xAndODiv[2].firstChild?.classList.contains("ticTAcX") 
        && xAndODiv[5].firstChild?.classList.contains("ticTAcX")
        && xAndODiv[8].firstChild?.classList.contains("ticTAcX") ){
            checkwinnerXPlayer();
    } 
    if(xAndODiv[0].firstChild?.classList.contains("ticTAcX") 
        && xAndODiv[4].firstChild?.classList.contains("ticTAcX")
        && xAndODiv[8].firstChild?.classList.contains("ticTAcX") ){
            checkwinnerXPlayer();
    }
    if(xAndODiv[2].firstChild?.classList.contains("ticTAcX")   
        && xAndODiv[4].firstChild?.classList.contains("ticTAcX")
        && xAndODiv[6].firstChild?.classList.contains("ticTAcX") ){
            checkwinnerXPlayer();
    }  




    if(xAndODiv[0].firstChild?.classList.contains("ticTacO") 
        && xAndODiv[1].firstChild?.classList.contains("ticTacO")
        && xAndODiv[2].firstChild?.classList.contains("ticTacO") ){
            check();
    }
    
    if(xAndODiv[3].firstChild?.classList.contains("ticTacO") 
        && xAndODiv[4].firstChild?.classList.contains("ticTacO")
        && xAndODiv[5].firstChild?.classList.contains("ticTacO") ){
            check();
        }
    if(xAndODiv[6].firstChild?.classList.contains("ticTacO") 
        && xAndODiv[7].firstChild?.classList.contains("ticTacO")
         && xAndODiv[8].firstChild?.classList.contains("ticTacO") ){
            check();
    }
    if(xAndODiv[0].firstChild?.classList.contains("ticTacO") 
        && xAndODiv[3].firstChild?.classList.contains("ticTacO")
        && xAndODiv[6].firstChild?.classList.contains("ticTacO") ){
            check();
    }
    if(xAndODiv[1].firstChild?.classList.contains("ticTacO") 
        && xAndODiv[4].firstChild?.classList.contains("ticTacO")
        && xAndODiv[7].firstChild?.classList.contains("ticTacO") ){
            check();
    }         
    if(xAndODiv[2].firstChild?.classList.contains("ticTacO") 
        && xAndODiv[5].firstChild?.classList.contains("ticTacO")
        && xAndODiv[8].firstChild?.classList.contains("ticTacO") ){
            check();
    } 
    if(xAndODiv[0].firstChild?.classList.contains("ticTacO") 
        && xAndODiv[4].firstChild?.classList.contains("ticTacO")
        && xAndODiv[8].firstChild?.classList.contains("ticTacO") ){
            check();
    }
    if(xAndODiv[2].firstChild?.classList.contains("ticTacO") 
        && xAndODiv[4].firstChild?.classList.contains("ticTacO")
        && xAndODiv[6].firstChild?.classList.contains("ticTacO") ){
            check();
    } 
    checkTiedGame();
}    