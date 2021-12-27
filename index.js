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

function getCardImage() {
  cardImg = "img/cards/2_of_clubs.png";
  document.getElementById("card-img").src = cardImg;
  document.getElementById("card-img").style.display = "block";
}
