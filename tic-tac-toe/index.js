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
let restrDiv = document.getElementsByClassName("restrDiv")[0];
let rameErqvas = document.getElementsByTagName("rameErqvas");
let quitButtons = document.querySelectorAll(".QuitButton");
let NEXTROUND = document.querySelectorAll(".NEXTROUND");
let bcf = "";

function displayNoneForLongDivs(){
    ohNoYouLost.style.display = "none";
    youWonDiv.style.display = "none";
    player1Wins.style.display = "none";
    player2Wins.style.display = "none";
    tiedGame.style.display = "none";
}

NEXTROUND.forEach(function(nextRoundButton){
    nextRoundButton.addEventListener('click', function(event){
        for(let i=0; i<parents.length; i++){
            parents[i].innerHTML = "";
        }
        arr = [0,1,2,3,4,5,6,7,8];
        parents[0].classList.remove("ooo");
       parents[1].classList.remove("ooo");
       parents[2].classList.remove("ooo");
        parents[3].classList.remove("ooo");
       parents[4].classList.remove("ooo");
       parents[5].classList.remove("ooo");
        parents[6].classList.remove("ooo");
       parents[7].classList.remove("ooo");
       parents[8].classList.remove("ooo");
       parents[0].classList.remove("xxx");
       parents[1].classList.remove("xxx");
       parents[2].classList.remove("xxx");
       parents[3].classList.remove("xxx");
       parents[4].classList.remove("xxx");
       parents[5].classList.remove("xxx");
       parents[6].classList.remove("xxx");
       parents[7].classList.remove("xxx");
       parents[8].classList.remove("xxx");
       
        displayNoneForLongDivs();
        count=0;
        checkTiedTruth = false;
        oTurn.style.display = "none";
        xTurn.style.display = "block";
        hoverForDivs();
        if(gameMode==="CPU" && playerChoise === "O"){
            autoFillO();
        }
        

    })

    
});

quitButtons.forEach(function(quitButton){
    quitButton.addEventListener ('click', function (event){
        bcf = 'buttonClick' ;  
        oTurn.style.display = "none";
        xTurn.style.display = "block";
        newGAmeDiv.style.display = "flex";
        maindDiv.style.display = "none";
        counterDivX.innerText = 0;
        counterDiv.innerText = 0;
        counterDivXcpu.innerText = 0;
        counterDivXcp.innerText = 0;
        counterDivTies.innerText = 0;
        counterDivTie.innerText = 0;
        
        for(let i=0; i<parents.length; i++){
            parents[i].innerHTML = "";
        }
        arr = [0,1,2,3,4,5,6,7,8];
        parents[0].classList.remove("ooo");
       parents[1].classList.remove("ooo");
       parents[2].classList.remove("ooo");
        parents[3].classList.remove("ooo");
       parents[4].classList.remove("ooo");
       parents[5].classList.remove("ooo");
        parents[6].classList.remove("ooo");
       parents[7].classList.remove("ooo");
       parents[8].classList.remove("ooo");
       parents[0].classList.remove("xxx");
       parents[1].classList.remove("xxx");
       parents[2].classList.remove("xxx");
       parents[3].classList.remove("xxx");
       parents[4].classList.remove("xxx");
       parents[5].classList.remove("xxx");
       parents[6].classList.remove("xxx");
       parents[7].classList.remove("xxx");
       parents[8].classList.remove("xxx");
       
        displayNoneForLongDivs();
        count=0;
        checkTiedTruth = false;

    
    });
});

let arr = [0,1,2,3,4,5,6,7,8];
function findFilledBoxes(number){
    let index = arr.findIndex((element) => element == number)
    arr.splice(index,1);
}


function autoFill(){
    let randomNumber = arr [Math.floor(Math.random() * arr.length)];
    parents[randomNumber].innerHTML = "<img class='ticTacO' src='./assets/ofordiv.png' />";
    findFilledBoxes(randomNumber);
    count++;
    hoverForDivs();
}
function autoFillO(){
    let randomNumber = arr [Math.floor(Math.random() * arr.length)];
    parents[randomNumber].innerHTML = "<img class='ticTAcX' src='./assets/x for div.png'  />  ";
    findFilledBoxes(randomNumber);
    count++;
    hoverForDivs();
}



oTurn.style.display = "none";
counterDivX.innerHTML = '0';
counterDivTies.innerHTML = '0';
counterDivXcpu.innerHTML = '0';
counterDiv.innerHTML = '0';
counterDivTie.innerHTML = '0'
counterDivXcp.innerHTML = '0'


function hoverForDivs(){
    for(let i=0; i<parents.length; i++){
        if(count%2 == 0){
            if(arr.includes(i)){
                parents[i].classList.add("tictacDivs");
            }
            
            parents[i].classList.remove("tictacDivsO");
            oTurn.style.display = "none";
            xTurn.style.display = "block";
        } else{
            if(arr.includes(i)){
                parents[i].classList.add("tictacDivsO");
            }
            
            parents[i].classList.remove("tictacDivs");
            oTurn.style.display = "block";
            xTurn.style.display = "none";
        }
    }
}

function incrementWinner(element){
    if(element==="X"){
        let currentCount = parseInt(counterDivX.innerText);
        counterDivX.innerText = currentCount + 1;
        let currentCounts = parseInt(counterDiv.innerText);
        counterDiv.innerText = currentCounts + 1;
    } 

    if(element === "O"){
        let currentCount = parseInt(counterDivXcpu.innerText);
        counterDivXcpu.innerText = currentCount + 1;
        let currentCounts = parseInt(counterDivXcp.innerText);
        counterDivXcp.innerText = currentCounts + 1;
    }

    if(element === "TIE"){
        let currentCount = parseInt(counterDivTies.innerText);
        counterDivTies.innerText = currentCount + 1;
        let currentCounts = parseInt(counterDivTie.innerText);
        counterDivTie.innerText = currentCounts + 1;
    }
}


    
   

restrDiv.addEventListener('click', function (event) {
    count = 0;
    checkTiedTruth = false;
    for(let i=0; i<parents.length; i++){
        parents[i].innerHTML = "";
    }
    arr = [0,1,2,3,4,5,6,7,8];
    counterDivX.innerText = 0;
    counterDiv.innerText = 0;
    counterDivXcpu.innerText = 0;
    counterDivXcp.innerText = 0;
    counterDivTies.innerText = 0;
    counterDivTie.innerText = 0; 
    oTurn.style.display = "none";
    xTurn.style.display = "block";
    hoverForDivs();
    if(gameMode==="CPU" && playerChoise === "O"){
        autoFillO();
    }
    
    
});

nGvsCPU.addEventListener('click', function (event) {
    newGAmeDiv.style.display = "none";
    maindDiv.style.display = "flex";
   
    gameMode = "CPU"
    if(playerChoise === 'O' ){
    autoFillO();}
    xWhite.classList.remove("xWhiteImage");
    hoverForDivs();

      
});

ngvsPlayer.addEventListener('click', function (event) {
    newGAmeDiv.style.display = "none";
    maindDiv.style.display = "flex";
    divNgvsCpu.style.display = "none";
    divNgvsPlayer.style.display = "flex";
    gameMode = "player";
    hoverForDivs();
    xWhite.classList.remove("xWhiteImage");
    hoverForDivs();

    if(event.target.classList.contains('xAndODiv')){
        if(count%2 == 0){   
            event.target.innerHTML = "<img class='ticTacO' src='./assets/ofordiv.png' />";
           findFilledBoxes(event.target.getAttribute("rameErqvas"));
           if(gameMode === "CPU" && playerChoise === 'X' && arr.length !== 0){ 
               autoFill();
           }
           
       } else{
        event.target.innerHTML = "<img class='ticTAcX' src='./assets/x for div.png'  />  ";
           findFilledBoxes(event.target.getAttribute("rameErqvas"));
           if(gameMode === "CPU" && playerChoise === 'O' && arr.length !== 0){ 
               autoFillO();
           }
       }
            
   }

    
});

oDarkImg.addEventListener('click', function (event) {
    p1Span.innerHTML = "(p2)";
    p2Span.innerHTML = "(p1)";
    cpuSpan.innerHTML= "(YOU)";
    youSpan.innerHTML= "(CPU)";
    playerChoise = 'O'
    xWhite.classList.remove("xWhiteImage");
    
});

xWhite.addEventListener('click', function (event) {
    p1Span.innerHTML = "(P1)";
    p2Span.innerHTML = "(P2)";
    youSpan.innerHTML= "(You)";
    cpuSpan.innerHTML= "(CPU)"
    playerChoise = 'X';
    xWhite.classList.add("xWhiteImage");



});

let count = 0;
for(let i=0; i<parents.length; i++){
    parents[i].onclick =  function (event) {
         if(event.target.childNodes.length !==2 ) {
         if(event.target.classList.contains('xAndODiv')){
             if(count%2 == 0){   
             event.target.innerHTML = "<img class='ticTAcX' src='./assets/x for div.png'  />  ";
                findFilledBoxes(event.target.getAttribute("rameErqvas"));
                if(gameMode === "CPU" && playerChoise === 'X' && arr.length !== 0){ 
                    let checkBeforeEnd =   checkwinner();
                    if(!checkBeforeEnd ){
                        autoFill();
                    }
                    
                }
                
            } else{
                event.target.innerHTML = "<img class='ticTacO' src='./assets/ofordiv.png' />";
                findFilledBoxes(event.target.getAttribute("rameErqvas"));
                if(gameMode === "CPU" && playerChoise === 'O' && arr.length !== 0){ 
                    let checkBeforeEnd  =  checkwinner();
                        if(!checkBeforeEnd){
                            autoFillO();
                        }
                    
                }
            }
                 
        }        
        count++;
        checkwinner();
        hoverForDivs();
         }
        }
    
         
    }




function check(index1,index2,index3){
    parents[index1].classList.add("ooo");
   parents[index2].classList.add("ooo");
   parents[index3].classList.add("ooo");
   parents[index1].querySelector(".ticTacO").remove()
   parents[index2].querySelector(".ticTacO").remove()
   parents[index3].querySelector(".ticTacO").remove()
    if(spanX.innerHTML == "X" && youSpan.innerHTML == "(You)" && gameMode =="CPU"){
        if(playerChoise === 'X'){
            ohNoYouLost.style.display = "flex";
            checkTiedTruth = true;
            incrementWinner("O");
            return true;

        }
    }
    if(spanX.innerHTML == "X" && youSpan.innerHTML == "(You)" && gameMode =="CPU"){
        if(playerChoise === 'X'){
            ohNoYouLost.style.display = "flex";
            checkTiedTruth = true;
            incrementWinner("O");
            return true;

        }
    }
    else if(spanO.innerHTML == "O" && p2Span.innerHTML == "(p1)" && gameMode!=="CPU"){
        ohNoYouLost.style.display = "flex";
        ohNoyoulostIdFirst.innerHTML = "Player 1 WINS!";
        checkTiedTruth = true;
        incrementWinner("O");
        return true;

    }else if(spanO.innerHTML == "O" && p2Span.innerHTML == "(P2)" && gameMode!=="CPU"){
        ohNoYouLost.style.display = "flex";
        ohNoyoulostIdFirst.innerHTML = "Player 2 WINS!";
        checkTiedTruth = true;
        incrementWinner("O");
        return true;

    }else  if(spanO.innerHTML == "O" && cpuSpan.innerHTML == "(YOU)" && gameMode =="CPU" ) {
        ohNoYouLost.style.display = "flex";
        ohNoText.innerHTML = "YOU WON!";
        checkTiedTruth = true;
        incrementWinner("O");
        return true;

    } 
    
    
    
}

function checkwinnerXPlayer(index1,index2,index3){
    parents[index1].classList.add("xxx")
   parents[index2].classList.add("xxx")
   parents[index3].classList.add("xxx")
   parents[index1].querySelector(".ticTAcX").remove()
   parents[index2].querySelector(".ticTAcX").remove()
   parents[index3].querySelector(".ticTAcX").remove()
    if(spanX.innerHTML == "X" && youSpan.innerHTML == "(CPU)" && gameMode =="CPU"){
        if (playerChoise === 'O') {
            youWonDiv.style.display = "flex"; 
            ohNoyouLostId.innerHTML = "OH NO, YOU LOST...";
            checkTiedTruth = true;
            incrementWinner("X");
            return true;
        } 
    } else if(spanX.innerHTML == "X" && p1Span.innerHTML == "(P1)" && gameMode!=="CPU"){
        player1Wins.style.display = "flex";
        checkTiedTruth = true;
        incrementWinner("X");
        return true;


    }else if(spanX.innerHTML == "X" && p1Span.innerHTML == "(p2)" && gameMode!=="CPU"){
        player2Wins.style.display = "flex";
        checkTiedTruth = true;
        incrementWinner("X");
        return true;


    }else if(spanX.innerHTML == "X" && youSpan.innerHTML == "(You)" && gameMode =="CPU" ) {
        youWonDiv.style.display = "flex"; 
        ohNoyouLostId.innerHTML = "YOU WON!";
        checkTiedTruth = true;  
        incrementWinner("X");
        return true;

        


    }
   

}
// console.log(parents.length);

function checkTiedGame(){
   
    if(count === 9 && checkTiedTruth === false ){
        tiedGame.style.display = "flex";
        incrementWinner("TIE");
    }
}
function checkwinner(){
    
   
    if(xAndODiv[0].firstChild?.classList?.contains("ticTAcX") 
        && xAndODiv[1].firstChild?.classList?.contains("ticTAcX")
        && xAndODiv[2].firstChild?.classList?.contains("ticTAcX") ){
            
           return checkwinnerXPlayer(0,1,2);

    }
    
    if(xAndODiv[3].firstChild?.classList?.contains("ticTAcX") 
        && xAndODiv[4].firstChild?.classList?.contains("ticTAcX")
        && xAndODiv[5].firstChild?.classList?.contains("ticTAcX") ){
           return checkwinnerXPlayer(3,4,5);
        }
    if(xAndODiv[6].firstChild?.classList?.contains("ticTAcX") 
        && xAndODiv[7].firstChild?.classList?.contains("ticTAcX")
         && xAndODiv[8].firstChild?.classList?.contains("ticTAcX") ){
            return checkwinnerXPlayer(6,7,8);
    }
    
    if(xAndODiv[0].firstChild?.classList?.contains("ticTAcX") 
        && xAndODiv[3].firstChild?.classList?.contains("ticTAcX")
        && xAndODiv[6].firstChild?.classList?.contains("ticTAcX") ){
            return  checkwinnerXPlayer(0,3,6);
    }
    if(xAndODiv[1].firstChild?.classList?.contains("ticTAcX") 
        && xAndODiv[4].firstChild?.classList?.contains("ticTAcX")
        && xAndODiv[7].firstChild?.classList?.contains("ticTAcX") ){
            return  checkwinnerXPlayer(1,4,7);
    }         
    if(xAndODiv[2].firstChild?.classList?.contains("ticTAcX") 
        && xAndODiv[5].firstChild?.classList?.contains("ticTAcX")
        && xAndODiv[8].firstChild?.classList?.contains("ticTAcX") ){
            return checkwinnerXPlayer(2,5,8);
    } 
    if(xAndODiv[0].firstChild?.classList?.contains("ticTAcX") 
        && xAndODiv[4].firstChild?.classList?.contains("ticTAcX")
        && xAndODiv[8].firstChild?.classList?.contains("ticTAcX") ){
            console.log(11);

            return  checkwinnerXPlayer(0,4,8);
            
    }
    if(xAndODiv[2].firstChild?.classList?.contains("ticTAcX")   
        && xAndODiv[4].firstChild?.classList?.contains("ticTAcX")
        && xAndODiv[6].firstChild?.classList?.contains("ticTAcX") ){
            return  checkwinnerXPlayer(2,4,6);
    }  




    if(xAndODiv[0].firstChild?.classList?.contains("ticTacO") 
        && xAndODiv[1].firstChild?.classList?.contains("ticTacO")
        && xAndODiv[2].firstChild?.classList?.contains("ticTacO") ){
            return  check(0,1,2);
    }
    
    if(xAndODiv[3].firstChild?.classList?.contains("ticTacO") 
        && xAndODiv[4].firstChild?.classList?.contains("ticTacO")
        && xAndODiv[5].firstChild?.classList?.contains("ticTacO") ){
            return  check(3,4,5);
        }
    if(xAndODiv[6].firstChild?.classList?.contains("ticTacO") 
        && xAndODiv[7].firstChild?.classList?.contains("ticTacO")
         && xAndODiv[8].firstChild?.classList?.contains("ticTacO") ){
            return  check(6,7,8);
    }
    if(xAndODiv[0].firstChild?.classList?.contains("ticTacO") 
        && xAndODiv[3].firstChild?.classList?.contains("ticTacO")
        && xAndODiv[6].firstChild?.classList?.contains("ticTacO") ){
            return  check(0,3,6);
    }
    if(xAndODiv[1].firstChild?.classList?.contains("ticTacO") 
        && xAndODiv[4].firstChild?.classList?.contains("ticTacO")
        && xAndODiv[7].firstChild?.classList?.contains("ticTacO") ){
            return  check(1,4,7);
    }         
    if(xAndODiv[2].firstChild?.classList?.contains("ticTacO") 
        && xAndODiv[5].firstChild?.classList?.contains("ticTacO")
        && xAndODiv[8].firstChild?.classList?.contains("ticTacO") ){
            return check(2,5,8);
    } 
    if(xAndODiv[0].firstChild?.classList?.contains("ticTacO") 
        && xAndODiv[4].firstChild?.classList?.contains("ticTacO")
        && xAndODiv[8].firstChild?.classList?.contains("ticTacO") ){
            return  check(0,4,8);
    }
    if(xAndODiv[2].firstChild?.classList?.contains("ticTacO") 
        && xAndODiv[4].firstChild?.classList?.contains("ticTacO")
        && xAndODiv[6].firstChild?.classList?.contains("ticTacO") ){
            return  check(2,4,6);
    } 
    
    checkTiedGame();
}    