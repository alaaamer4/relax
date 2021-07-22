const text = document.querySelector(".text");
const container = document.querySelector(".container");
const quote = document.querySelector(".quote");

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

const getQuote = () => {
  fetch("https://quotes.rest/qod.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      quote.innerHTML = data.contents.quotes[0].quote;
    });
};
function breathAnimation() {
  text.innerText = "Breath In";
  container.className = "container grow";
  setTimeout(() => {
    text.innerText = "Hold";

    setTimeout(() => {
      text.innerText = "Breath Out";
      container.className = "container shrink";
    }, holdTime);
  }, breathTime);
}

getQuote();
breathAnimation();
setInterval(breathAnimation, totalTime);
