const colors = ['red','blue','green','purple','orange','pink','red','blue','green','purple','orange','pink'];
let cards = shuffle(colors.concat(colors));
let SelectedCards = [];
let score=0;
let TimeLeft=30;
let gameinterval;

const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

function generateCards(){
     for(const color of cards){
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color=color;
        card.textContent='?';
        gameContainer.appendChild(card);
     }
}


function shuffle(array){
    for(let i=array.length-1;i>0;i--){
       const j = Math.floor(Math.random()*(i+1));
       [array[i],array[j]]=[array[j],array[i]];
    }
    return array;
}

function handlecardclick(event){
      const card = event.target;
      if(!card.classList.contains('card')||card.classList.contains('matched')){
        return;
      }
      card.textContent = card.dataset.color;
      card.style.backgroundColor = card.dataset.color;
      SelectedCards.push(card);         
      if(SelectedCards.length==2){
        setTimeout(checkMath,500);
      }
}

function checkMath(){
    const [card1,card2] = SelectedCards;
    if(card1.dataset.color===card2.dataset.color){
    card1.classList.add('matched');
    card2.classList.add('matched');
    score+=2;
    scoreElement.textContent = `score : ${score}`;
    }else{
          card1.textContent='?';
          card2.textContent='?';
          card1.style.backgroundColor='#ddd';
          card2.style.backgroundColor='#ddd';
    }
    SelectedCards = [];
}

function startGame(){
      TimeLeft=30;
     startbtn.disabled=true;
     score=0;
     scoreElement.textContent=`Score : ${score}`;
     startGameTimer(TimeLeft);
     cards=shuffle(colors.concat(colors));
     SelectedCards = [];
     gameContainer.innerHTML='';
     generateCards();
     gameContainer.addEventListener('click',handlecardclick);
}

function startGameTimer(TimeLeft){
      timerElement.textContent=`Time Left : ${TimeLeft}`;
      gameinterval = setInterval(()=>{
         TimeLeft--;
         timerElement.textContent = `Time Left : ${TimeLeft}`;

         if(TimeLeft===0){
            clearInterval(gameinterval);
                  TimeLeft = 30;
                 alert('Game Over');
                 startbtn.disabled=false;
         }
      },1000);
}

startbtn.addEventListener('click',startGame);