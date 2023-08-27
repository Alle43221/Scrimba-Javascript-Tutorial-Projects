let firstCard = Math.floor(Math.random()*11)+1;
let secondCard = Math.floor(Math.random()*11)+1;
let sum = firstCard + secondCard;
let message = "";
let cards='';
cards+=firstCard+' ';
cards+=secondCard;
let PlayerName='Bob';
let chips=145;

document.getElementById('credits').innerText=`${PlayerName}: $${chips}`

function start(){
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
    } else {
        message = "You're out of the game!"
    }
    document.getElementById('message-el').innerText=message;
    document.getElementById('cards').innerText='Cards: '+cards;
    document.getElementById('sum').innerText='Sum: '+sum;
}

function card(){
    let new_card;
    if(sum<21){
        new_card=Math.floor(Math.random()*11)+1;
        sum+=new_card;
        cards+=' '+new_card;
        start();
    }
}
