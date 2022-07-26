let newGAmeDiv = document.getElementById("newGameDivStart");
let maindDiv = document.getElementById("mainDiv");
let nGvsCPU = document.getElementsByClassName("NGvsCPU")[0];
let ngvsPlayer = document.getElementsByClassName("ngvsPlayer")[0];
let divNgvsPlayer = document.getElementsByClassName("lastDivMultiplayer")[0];
let divNgvsCpu = document.getElementsByClassName("lastBigDivSolo")[0];
let xTurn = document.getElementById("xTurn");
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
let gameModeO = "CPUO"
let ohNoText = document.getElementsByClassName("ohNoText")[0];
let playerChoise = " ";



counterDivX.innerHTML = '0';
counterDivTies.innerHTML = '0';
counterDivXcpu.innerHTML = '0';
counterDiv.innerHTML = '0';
counterDivTie.innerHTML = '0'
counterDivXcp.innerHTML = '0'






nGvsCPU.addEventListener('click', function (event) {
    newGAmeDiv.style.display = "none";
    maindDiv.style.display = "flex";
    gameMode = "CPU"
    gameModeO = "CPUO"

});

ngvsPlayer.addEventListener('click', function (event) {
    newGAmeDiv.style.display = "none";
    maindDiv.style.display = "flex";
    divNgvsCpu.style.display = "none";
    divNgvsPlayer.style.display = "flex";
    gameMode = "player"
    gameModeO = "playerO"

    
});

oDarkImg.addEventListener('click', function (event) {
    p1Span.innerHTML = "(p2)";
    p2Span.innerHTML = "(p1)";
    cpuSpan.innerHTML= "(YOU)";
    youSpan.innerHTML= "(CPU)";
    gameModeO = "CPUO";
});

xWhite.addEventListener('click', function (event) {
    p1Span.innerHTML = "(P1)";
    p2Span.innerHTML = "(P2)";
});

let count = 0;

parent.onclick =  function (event) {
    
    if(event.target.className == 'xAndODiv'){
        if(count%2 == 0){
            event.target.innerHTML = "<img class='ticTAcX' src='./assets/x for div.png'  />  ";
        } else{
            event.target.innerHTML = "<img class='ticTacO' src='./assets/ofordiv.png' />";
        }
        count++;
        checkwinner();

    }
    
};

function checkwinner(){
    
    
    if(xAndODiv[0].firstChild?.className == "ticTAcX" && xAndODiv[1].firstChild?.className == "ticTAcX"
        && xAndODiv[2].firstChild?.className == "ticTAcX" ){
            if(spanX.innerHTML == "X" && youSpan.innerHTML == "(CPU)" && gameMode =="CPU"){
                ohNoYouLost.style.display = "flex";
            } else if(spanX.innerHTML == "X" && p1Span.innerHTML == "(P1)" && gameMode!=="CPU"){
                player1Wins.style.display = "flex";

            }else if(spanX.innerHTML == "X" && p1Span.innerHTML == "(p2)" && gameMode!=="CPU"){
                player2Wins.style.display = "flex";
            }else if(spanX.innerHTML == "X" && youSpan.innerHTML == "(You)" && gameMode =="CPU" ) {
                youWonDiv.style.display = "flex";   
            }

    }
    
    if(xAndODiv[3].firstChild?.className == "ticTAcX" && xAndODiv[4].firstChild?.className == "ticTAcX"
        && xAndODiv[5].firstChild?.className == "ticTAcX" ){
            if(spanX.innerHTML == "X" && youSpan.innerHTML == "(CPU)" && gameMode =="CPU"){
                ohNoYouLost.style.display = "flex";
            } else if(spanX.innerHTML == "X" && p1Span.innerHTML == "(P1)" && gameMode!=="CPU"){
                player1Wins.style.display = "flex";

            }else if(spanX.innerHTML == "X" && p1Span.innerHTML == "(p2)" && gameMode!=="CPU"){
                player2Wins.style.display = "flex";
            }else if(spanX.innerHTML == "X" && youSpan.innerHTML == "(You)" && gameMode =="CPU" ) {
                youWonDiv.style.display = "flex";   
            }
        }
    if(xAndODiv[6].firstChild?.className == "ticTAcX" && xAndODiv[7].firstChild?.className == "ticTAcX"
         && xAndODiv[8].firstChild?.className == "ticTAcX" ){
            if(spanX.innerHTML == "X" && youSpan.innerHTML == "(CPU)" && gameMode =="CPU"){
                ohNoYouLost.style.display = "flex";
            } else if(spanX.innerHTML == "X" && p1Span.innerHTML == "(P1)" && gameMode!=="CPU"){
                player1Wins.style.display = "flex";

            }else if(spanX.innerHTML == "X" && p1Span.innerHTML == "(p2)" && gameMode!=="CPU"){
                player2Wins.style.display = "flex";
            }else if(spanX.innerHTML == "X" && youSpan.innerHTML == "(You)" && gameMode =="CPU" ) {
                youWonDiv.style.display = "flex";   
            }
    }
    if(xAndODiv[0].firstChild?.className == "ticTAcX" && xAndODiv[3].firstChild?.className == "ticTAcX"
        && xAndODiv[6].firstChild?.className == "ticTAcX" ){
            if(spanX.innerHTML == "X" && youSpan.innerHTML == "(CPU)" && gameMode =="CPU"){
                ohNoYouLost.style.display = "flex";
            } else if(spanX.innerHTML == "X" && p1Span.innerHTML == "(P1)" && gameMode!=="CPU"){
                player1Wins.style.display = "flex";

            }else if(spanX.innerHTML == "X" && p1Span.innerHTML == "(p2)" && gameMode!=="CPU"){
                player2Wins.style.display = "flex";
            }else if(spanX.innerHTML == "X" && youSpan.innerHTML == "(You)" && gameMode =="CPU" ) {
                youWonDiv.style.display = "flex";   
            }
    }
    if(xAndODiv[1].firstChild?.className == "ticTAcX" && xAndODiv[4].firstChild?.className == "ticTAcX"
        && xAndODiv[7].firstChild?.className == "ticTAcX" ){
            if(spanX.innerHTML == "X" && youSpan.innerHTML == "(CPU)" && gameMode =="CPU"){
                ohNoYouLost.style.display = "flex";
            } else if(spanX.innerHTML == "X" && p1Span.innerHTML == "(P1)" && gameMode!=="CPU"){
                player1Wins.style.display = "flex";

            }else if(spanX.innerHTML == "X" && p1Span.innerHTML == "(p2)" && gameMode!=="CPU"){
                player2Wins.style.display = "flex";
            }else if(spanX.innerHTML == "X" && youSpan.innerHTML == "(You)" && gameMode =="CPU" ) {
                youWonDiv.style.display = "flex";   
            }
    }         
    if(xAndODiv[2].firstChild?.className == "ticTAcX" && xAndODiv[5].firstChild?.className == "ticTAcX"
        && xAndODiv[8].firstChild?.className == "ticTAcX" ){
            if(spanX.innerHTML == "X" && youSpan.innerHTML == "(CPU)" && gameMode =="CPU"){
                ohNoYouLost.style.display = "flex";
            } else if(spanX.innerHTML == "X" && p1Span.innerHTML == "(P1)" && gameMode!=="CPU"){
                player1Wins.style.display = "flex";

            }else if(spanX.innerHTML == "X" && p1Span.innerHTML == "(p2)" && gameMode!=="CPU"){
                player2Wins.style.display = "flex";
            }else if(spanX.innerHTML == "X" && youSpan.innerHTML == "(You)" && gameMode =="CPU" ) {
                youWonDiv.style.display = "flex";   
            }
    } 
    if(xAndODiv[0].firstChild?.className == "ticTAcX" && xAndODiv[4].firstChild?.className == "ticTAcX"
        && xAndODiv[8].firstChild?.className == "ticTAcX" ){
            if(spanX.innerHTML == "X" && youSpan.innerHTML == "(CPU)" && gameMode =="CPU"){
                ohNoYouLost.style.display = "flex";
            } else if(spanX.innerHTML == "X" && p1Span.innerHTML == "(P1)" && gameMode!=="CPU"){
                player1Wins.style.display = "flex";

            }else if(spanX.innerHTML == "X" && p1Span.innerHTML == "(p2)" && gameMode!=="CPU"){
                player2Wins.style.display = "flex";
            }else if(spanX.innerHTML == "X" && youSpan.innerHTML == "(You)" && gameMode =="CPU" ) {
                youWonDiv.style.display = "flex";   
            }
    }
    if(xAndODiv[2].firstChild?.className == "ticTAcX" && xAndODiv[4].firstChild?.className == "ticTAcX"
        && xAndODiv[6].firstChild?.className == "ticTAcX" ){
            if(spanX.innerHTML == "X" && youSpan.innerHTML == "(CPU)" && gameMode =="CPU"){
                ohNoYouLost.style.display = "flex";
            } else if(spanX.innerHTML == "X" && p1Span.innerHTML == "(P1)" && gameMode!=="CPU"){
                player1Wins.style.display = "flex";

            }else if(spanX.innerHTML == "X" && p1Span.innerHTML == "(p2)" && gameMode!=="CPU"){
                player2Wins.style.display = "flex";
            }else if(spanX.innerHTML == "X" && youSpan.innerHTML == "(You)" && gameMode =="CPU" ) {
                youWonDiv.style.display = "flex";   
            }
    }  


console.log(spanO);
console.log(cpuSpan);




    

    if(xAndODiv[0].firstChild?.className == "ticTacO" && xAndODiv[1].firstChild?.className == "ticTacO"
        && xAndODiv[2].firstChild?.className == "ticTacO" ){
            
    if(spanO.innerHTML == "O" && cpuSpan.innerHTML == "(CPU)" && gameMode =="CPU" && gameModeO == "CPUO" ){
                player1Wins.style.display = "flex";
                
                
            } else if(spanO.innerHTML == "O" && p2Span.innerHTML == "(p1)" && gameMode!=="CPU"){
                player1Wins.style.display = "flex";

            }else if(spanO.innerHTML == "O" && p2Span.innerHTML == "(P2)" && gameMode!=="CPU"){
                player2Wins.style.display = "flex";
            }else if(spanO.innerHTML == "O" && cpuSpan.innerHTML == "(YOU)" && gameMode =="CPU" ) {
                ohNoYouLost.style.display = "flex";
                ohNoText.innerHTML = "YOU WON!";

            }

    }
    
    if(xAndODiv[3].firstChild?.className == "ticTacO" && xAndODiv[4].firstChild?.className == "ticTacO"
        && xAndODiv[5].firstChild?.className == "ticTacO" ){
            if(spanO.innerHTML == "O" && cpuSpan.innerHTML == "(CPU)" && gameMode =="CPU"){
                ohNoYouLost.style.display = "flex";
            } else if(spanO.innerHTML == "O" && p2Span.innerHTML == "(P1)" && gameMode!=="CPU"){
                player1Wins.style.display = "flex";

            }else if(spanO.innerHTML == "O" && p2Span.innerHTML == "(p2)" && gameMode!=="CPU"){
                player2Wins.style.display = "flex";
            }else if(spanO.innerHTML == "O" && cpuSpan.innerHTML == "(You)" && gameMode =="CPU" ) {
                youWonDiv.style.display = "flex";   
            }
        }
    if(xAndODiv[6].firstChild?.className == "ticTacO" && xAndODiv[7].firstChild?.className == "ticTacO"
         && xAndODiv[8].firstChild?.className == "ticTacO" ){
            if(spanO.innerHTML == "O" && cpuSpan.innerHTML == "(CPU)" && gameMode =="CPU"){
                ohNoYouLost.style.display = "flex";
            } else if(spanO.innerHTML == "O" && p2Span.innerHTML == "(P1)" && gameMode!=="CPU"){
                player1Wins.style.display = "flex";

            }else if(spanO.innerHTML == "O" && p2Span.innerHTML == "(p2)" && gameMode!=="CPU"){
                player2Wins.style.display = "flex";
            }else if(spanO.innerHTML == "O" && cpuSpan.innerHTML == "(You)" && gameMode =="CPU" ) {
                youWonDiv.style.display = "flex";   
            }
    }
    if(xAndODiv[0].firstChild?.className == "ticTacO" && xAndODiv[3].firstChild?.className == "ticTacO"
        && xAndODiv[6].firstChild?.className == "ticTacO" ){
            if(spanO.innerHTML == "O" && cpuSpan.innerHTML == "(CPU)" && gameMode =="CPU"){
                ohNoYouLost.style.display = "flex";
            } else if(spanO.innerHTML == "O" && p2Span.innerHTML == "(P1)" && gameMode!=="CPU"){
                player1Wins.style.display = "flex";

            }else if(spanO.innerHTML == "O" && p2Span.innerHTML == "(p2)" && gameMode!=="CPU"){
                player2Wins.style.display = "flex";
            }else if(spanO.innerHTML == "O" && cpuSpan.innerHTML == "(You)" && gameMode =="CPU" ) {
                youWonDiv.style.display = "flex";   
            }
    }
    if(xAndODiv[1].firstChild?.className == "ticTacO" && xAndODiv[4].firstChild?.className == "ticTacO"
        && xAndODiv[7].firstChild?.className == "ticTacO" ){
            if(spanO.innerHTML == "O" && cpuSpan.innerHTML == "(CPU)" && gameMode =="CPU"){
                ohNoYouLost.style.display = "flex";
            } else if(spanO.innerHTML == "O" && p2Span.innerHTML == "(P1)" && gameMode!=="CPU"){
                player1Wins.style.display = "flex";

            }else if(spanO.innerHTML == "O" && p2Span.innerHTML == "(p2)" && gameMode!=="CPU"){
                player2Wins.style.display = "flex";
            }else if(spanO.innerHTML == "O" && cpuSpan.innerHTML == "(You)" && gameMode =="CPU" ) {
                youWonDiv.style.display = "flex";   
            }
    }         
    if(xAndODiv[2].firstChild?.className == "ticTacO" && xAndODiv[5].firstChild?.className == "ticTacO"
        && xAndODiv[8].firstChild?.className == "ticTacO" ){
            if(spanO.innerHTML == "O" && cpuSpan.innerHTML == "(CPU)" && gameMode =="CPU"){
                ohNoYouLost.style.display = "flex";
            } else if(spanO.innerHTML == "O" && p2Span.innerHTML == "(P1)" && gameMode!=="CPU"){
                player1Wins.style.display = "flex";

            }else if(spanO.innerHTML == "O" && p2Span.innerHTML == "(p2)" && gameMode!=="CPU"){
                player2Wins.style.display = "flex";
            }else if(spanO.innerHTML == "O" && cpuSpan.innerHTML == "(You)" && gameMode =="CPU" ) {
                youWonDiv.style.display = "flex";   
            }
    } 
    if(xAndODiv[0].firstChild?.className == "ticTacO" && xAndODiv[4].firstChild?.className == "ticTacO"
        && xAndODiv[8].firstChild?.className == "ticTacO" ){
            if(spanO.innerHTML == "O" && cpuSpan.innerHTML == "(CPU)" && gameMode =="CPU"){
                ohNoYouLost.style.display = "flex";
            } else if(spanO.innerHTML == "O" && p2Span.innerHTML == "(P1)" && gameMode!=="CPU"){
                player1Wins.style.display = "flex";

            }else if(spanO.innerHTML == "O" && p2Span.innerHTML == "(p2)" && gameMode!=="CPU"){
                player2Wins.style.display = "flex";
            }else if(spanO.innerHTML == "O" && cpuSpan.innerHTML == "(You)" && gameMode =="CPU" ) {
                youWonDiv.style.display = "flex";   
            }
    }
    if(xAndODiv[2].firstChild?.className == "ticTacO" && xAndODiv[4].firstChild?.className == "ticTacO"
        && xAndODiv[6].firstChild?.className == "ticTacO" ){
            if(spanO.innerHTML == "O" && cpuSpan.innerHTML == "(CPU)" && gameMode =="CPU"){
                ohNoYouLost.style.display = "flex";
            } else if(spanO.innerHTML == "O" && p2Span.innerHTML == "(P1)" && gameMode!=="CPU"){
                player1Wins.style.display = "flex";

            }else if(spanO.innerHTML == "O" && p2Span.innerHTML == "(p2)" && gameMode!=="CPU"){
                player2Wins.style.display = "flex";
            }else if(spanO.innerHTML == "O" && cpuSpan.innerHTML == "(You)" && gameMode =="CPU" ) {
                youWonDiv.style.display = "flex";   
            }
    }  
    console.log()

       

   

   
}
