const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard();
const $memoryCardFront = createMemoryCardFront();

$root.insertAdjacentHTML("beforeend", $cardsWrapper);
