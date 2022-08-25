let player = {
    name : "per", 
    chips : 145
}
let cards = [];
let sum = 0;
let gameCard = 21;

let hasBlackJack = false;
let isAlive = true;
let message = "";


let sumEl = document.querySelector('#sum-el');
let startBtn = document.querySelector('#start-btn');
let messageEl = document.querySelector('#message-el');
let cardEl = document.querySelector('#card-el');
let newBtn = document.querySelector('#new-btn');
let playerEl = document.querySelector("#player-el");


playerEl.innerHTML = player.name + ": $" + player.chips;

function getRandomCard(){
    let getRandom = Math.floor(Math.random() * 13);
    if(getRandom > 10){
        return 10;
    } else if(getRandom === 1){
        return 11;
    } else {
        return getRandom;
    }
}


function startGame(){
    isAlive = true;
    let card1 = getRandomCard();
    let card2 = getRandomCard();
    cards = [card1, card2];
    sum = card1 + card2 ;
    renderGame();
}


startBtn.addEventListener('click', renderGame);

function renderGame(){
    
    cardEl.innerHTML = "Cards: " ;

   for(let i=0;i<cards.length;i++){
    cardEl.innerHTML += cards[i] + " ";
   }

    sumEl.innerHTML = "Sum: " + sum;

    if(sum < gameCard){
        message = "Do you want to draw a new card";
    }
    else if(sum === gameCard){
        message = "You have Blackjack!";
        hasBlackJack = true;
    }
    else{
        message = "You're out of game";
        isAlive = false;
    }

    messageEl.innerHTML = message;

};

newBtn.addEventListener('click', newCard);

function newCard() {
if(isAlive === true && hasBlackJack === false){
let card = getRandomCard();
sum += card;
cards.push(card);   
renderGame();
}
   }




