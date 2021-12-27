let cardEl = document.getElementById("card-el");
let suitEl = document.getElementById("suit-el");
let cardImg = document.getElementById("card-img");

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

  return randomCard;
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

  return suit; //using return here so I can use entire function as parameter
}

function getCardImage(card, suit) {
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
  if (card === 2 && suit === 4) {
    cardImg = "img/cards/2_of_clubs.png";
  }

  document.getElementById("card-img").src = cardImg;
  document.getElementById("card-img").style.display = "block";
}

getCardImage(generateCard(), generateSuit());
