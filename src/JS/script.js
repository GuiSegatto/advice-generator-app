const randomizeButton = document.querySelector(".randomize-button");
const quoteId = document.querySelector(".advice__id");
const quote = document.querySelector(".quote");

const apiUrl = "https://api.adviceslip.com/advice";

function getAdvice() {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      quote.textContent = data.slip.advice;
      quoteId.textContent = data.slip.id;
    })
    .catch((error) => console.error(error));
}

randomizeButton.addEventListener("click", getAdvice);

getAdvice();
