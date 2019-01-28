const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();

const $memoryCardC = createMemoryCard({
  nameClass: "-front",
  src: "img/icon-c.png",
  alt: "Ícone de um livro da linguagem C++"
});

const $memoryCardJS = createMemoryCard({
  src: "img/icon-js.png",
  nameClass: "-front",
  alt: "Ícone de um livro da linguagem JavaScript"
});

const $memoryCardJava = createMemoryCard({
  nameClass: "-front",
  src: "img/icon-java.png",
  alt: "Ícone de um livro da linguagem Java"
});

const $memoryCardWoman = createMemoryCard({
  nameClass: "-front",
  src: "img/icon-woman.png",
  alt: "Ícone de um mina codando"
});

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
