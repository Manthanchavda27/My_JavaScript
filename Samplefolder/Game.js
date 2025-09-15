let number = (Math.floor(Math.random()*100)+1);
let attempts=0;

const user= document.getElementById('userinput');
const searchbtn = document.getElementById('Searchbtn');
const restartbtn = document.getElementById('restartbtn');
const message = document.getElementById('message');
const attemptsText = document.getElementById('attempt');

function guess(){

    const guess = parseInt(user.value);
    attempts++;

    if(isNaN(guess)){
        message.textcontent="Please Enter a Valid Number!";
    }

    if(guess==number){
        message.textcontent=`Congratulations you guessed the right Number which was ${number}.`;
        attemptsText.textContent=`You guessed the number in ${attempts} attempts.`;
        searchbtn.disabled=true;
        restartbtn.style.display="inline";
    }else if(guess<number){
        message.textContent=`Too Low! Try Again`;
    }else{
        message.textContent=`Too High! Try Again`;
    }
}

function restart(){
    number=(Math.floor(Math.random()*100)+1);
    attempts=0;
    message.textContent="";
    attempts.textContent="";
    user.value="";
    searchbtn.disabled=false;
    // restartbtn.style.display="none";
    searchbtn.addEventListener("click",guess);
}

searchbtn.addEventListener("click",guess);
restartbtn.addEventListener("click",restart);