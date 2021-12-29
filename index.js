let allCards = [
  "img/cards/2_of_clubs.png",
  "img/cards/2_of_diamonds.png",
  "img/cards/2_of_hearts.png",
  "img/cards/2_of_spades.png",
  "img/cards/3_of_clubs.png",
  "img/cards/3_of_diamonds.png",
  "img/cards/3_of_hearts.png",
  "img/cards/3_of_spades.png",
  "img/cards/4_of_clubs.png",
  "img/cards/4_of_diamonds.png",
  "img/cards/4_of_hearts.png",
  "img/cards/4_of_spades.png",
  "img/cards/5_of_clubs.png",
  "img/cards/5_of_diamonds.png",
  "img/cards/5_of_hearts.png",
  "img/cards/5_of_spades.png",
  "img/cards/6_of_clubs.png",
  "img/cards/6_of_diamonds.png",
  "img/cards/6_of_hearts.png",
  "img/cards/6_of_spades.png",
  "img/cards/7_of_clubs.png",
  "img/cards/7_of_diamonds.png",
  "img/cards/7_of_hearts.png",
  "img/cards/7_of_spades.png",
  "img/cards/8_of_clubs.png",
  "img/cards/8_of_diamonds.png",
  "img/cards/8_of_hearts.png",
  "img/cards/8_of_spades.png",
  "img/cards/9_of_clubs.png",
  "img/cards/9_of_diamonds.png",
  "img/cards/9_of_hearts.png",
  "img/cards/9_of_spades.png",
  "img/cards/10_of_clubs.png",
  "img/cards/10_of_diamonds.png",
  "img/cards/10_of_hearts.png",
  "img/cards/10_of_spades.png",
  "img/cards/ace_of_clubs.png",
  "img/cards/ace_of_diamonds.png",
  "img/cards/ace_of_hearts.png",
  "img/cards/ace_of_spades.png",
  "img/cards/jack_of_clubs2.png",
  "img/cards/jack_of_diamonds2.png",
  "img/cards/jack_of_hearts2.png",
  "img/cards/jack_of_spades2.png",
  "img/cards/king_of_clubs2.png",
  "img/cards/king_of_diamonds2.png",
  "img/cards/king_of_hearts2.png",
  "img/cards/king_of_spades2.png",
  "img/cards/queen_of_clubs2.png",
  "img/cards/queen_of_diamonds2.png",
  "img/cards/queen_of_hearts2.png",
  "img/cards/queen_of_spades2.png",
];

let cardNames = [
  "2 of clubs",
  "2 of diamonds",
  "2 of hearts",
  "2 of spades",
  "3 of clubs",
  "3 of diamonds",
  "3 of hearts",
  "3 of spades",
  "4 of clubs",
  "4 of diamonds",
  "4 of hearts",
  "4 of spades",
  "5 of clubs",
  "5 of diamonds",
  "5 of hearts",
  "5 of spades",
  "6 of clubs",
  "6 of diamonds",
  "6 of hearts",
  "6 of spades",
  "7 of clubs",
  "7 of diamonds",
  "7 of hearts",
  "7 of spades",
  "8 of clubs",
  "8 of diamonds",
  "8 of hearts",
  "8 of spades",
  "9 of clubs",
  "9 of diamonds",
  "9 of hearts",
  "9 of spades",
  "10 of clubs",
  "10 of diamonds",
  "10 of hearts",
  "10 of spades",
  "ace of clubs",
  "ace of diamonds",
  "ace of hearts",
  "ace of spades",
  "jack of clubs",
  "jack of diamonds",
  "jack of hearts",
  "jack of spades",
  "king of clubs",
  "king of diamonds",
  "king of hearts",
  "king of spades",
  "queen of clubs",
  "queen of diamonds",
  "queen of hearts",
  "queen of spades",
];
let cardEl = document.getElementById("card-el");
let suitEl = document.getElementById("suit-el");

// functionality of "DRAW CARD" button - start:

function drawCard() {
  generateCard();
  generateSuit();
}

function generateCard() {
  let randomCard = Math.ceil(Math.random() * 13);
  if (randomCard === 1) {
    randomCard = "ACE";
  } else if (randomCard === 11) {
    randomCard = "JACK";
  } else if (randomCard === 12) {
    randomCard = "QUEEN";
  } else if (randomCard === 13) {
    randomCard = "KING";
  }
  cardEl.innerHTML = randomCard;
}

function generateSuit() {
  let randomSuit = Math.ceil(Math.random() * 4);
  let suit = "";
  switch (randomSuit) {
    case 1:
      suit = "♥";
      break;
    case 2:
      suit = "♦";
      break;
    case 3:
      suit = "♠";
      break;
    case 4:
      suit = "♣";
      break;
  }
  suitEl.innerHTML = suit;

  if (suit === "♥" || suit === "♦") {
    suitEl.style.color = "red";
  } else {
    suitEl.style.color = "black";
  }
}

// functionality of "DRAW CARD" button - finish

function getCardImage() {
  let randomCardImg = allCards[Math.floor(Math.random() * 52)];

  document.getElementById("card-img").src = randomCardImg;
  document.getElementById("card-img").style.display = "block";
}

// To Do:

// - sort out alt-text for image!
