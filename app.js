// ignore VScode Stylelint errors
const card = document.querySelector(".card");
const nameInput = document.getElementById("name");
const numberInput = document.getElementById("number");
const dateInput = document.getElementById("date");
const cvcInput = document.getElementById("cvc");
const cardNumberSetOne = document.querySelector(".set-one");
const cardNumberSetTwo = document.querySelector(".set-two");
const cardNumberSetThree = document.querySelector(".set-three");
const cardNumberSetFour = document.querySelector(".set-four");

numberInput.setAttribute("type", "text");
cvcInput.setAttribute("type", "text");

const cardName = document.querySelector(".card-name");
const cardNumber = document.querySelector(".card-number");
const cardDate = document.querySelector(".card-date");
const cardCVC = document.querySelector(".card-cvc");

const rotateCardToAnterior = () => {
    card.setAttribute("data-rotate", "false");
};

const rotateCardToPosterior = () => {
    card.setAttribute("data-rotate", "true");
};

const updateCardName = (e) => {
    let name = e.target.value;
    if (name.length == 0) {
        return (cardName.innerText = "JOHN ALBRIGHT");
    }
    cardName.innerText = name;
};

const updateCardNumber = (e) => {
    let number = e.target.value;
    if (number.length == 0) {
        cardNumberSetOne.innerText = "0000";
        cardNumberSetTwo.innerText = "0000";
        cardNumberSetThree.innerText = "0000";
        cardNumberSetFour.innerText = "0000";
    } else if (number.length <= 4) {
        let trail = 4 - number.length;
        cardNumberSetOne.innerText = number;
        cardNumberSetTwo.innerText = "0000";
        cardNumberSetThree.innerText = "0000";
        cardNumberSetFour.innerText = "0000";
    } else if (number.length <= 8) {
        cardNumberSetOne.innerText = number.slice(0, 4);
        cardNumberSetTwo.innerText = number.slice(4);
        cardNumberSetThree.innerText = "0000";
        cardNumberSetFour.innerText = "0000";
    } else if (number.length <= 12) {
        cardNumberSetOne.innerText = number.slice(0, 4);
        cardNumberSetTwo.innerText = number.slice(4, 8);
        cardNumberSetThree.innerText = number.slice(8);
        cardNumberSetFour.innerText = "0000";
    } else if (number.length <= 16) {
        cardNumberSetOne.innerText = number.slice(0, 4);
        cardNumberSetTwo.innerText = number.slice(4, 8);
        cardNumberSetThree.innerText = number.slice(8, 12);
        cardNumberSetFour.innerText = number.slice(12);
    }
};

const updateCardDate = (e) => {
    let date = e.target.value.split("-");
    let dateYear = date[0].slice(2);
    let dateMonth = date[1];
    cardDate.innerText = `${dateMonth}/${dateYear}`;
};

const updateCardCVC = (e) => {
    let cvc = e.target.value;
    if (cvc.length < 1) {
        return (cardCVC.innerText = "000");
    }
    cardCVC.innerText = cvc;
};

nameInput.addEventListener("input", updateCardName);
numberInput.addEventListener("input", updateCardNumber);
dateInput.addEventListener("input", updateCardDate);
cvcInput.addEventListener("input", updateCardCVC);

cvcInput.addEventListener("focus", rotateCardToPosterior);
cvcInput.addEventListener("blur", rotateCardToAnterior);