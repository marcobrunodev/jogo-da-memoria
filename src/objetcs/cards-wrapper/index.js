function createCardsWrapper() {
  let qtdActiveMemoryCard = 0;
  const $cardsWrapper = document.createElement("section");
  $cardsWrapper.classList.add("cards-wrapper");

  const $head = document.querySelector("head");
  const $style = document.createElement("style");
  $style.textContent = `
    .cards-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-top: 10px;
      width: 100vw;
    }

    .cards-wrapper > div {
      margin-bottom: 10px;
    }
  `;

  $head.insertBefore($style, null);

  $cardsWrapper.addEventListener("click", () => {
    qtdActiveMemoryCard = $cardsWrapper.querySelectorAll(".memory-card.-active")
      .length;

    console.log(qtdActiveMemoryCard);
  });

  return $cardsWrapper;
}
