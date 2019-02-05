function memoryCard() {
  const $head = document.querySelector("head");
  const $style = document.createElement("style");

  $style.textContent = `
    .memory-card {
      width: 155px;
      height: 155px;
      position: relative;
    }
    .memory-card .card {
      width: 100%;
      height: 100%;
      background-color: #f25a70;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
      position: relative;
      cursor: pointer;
      position: absolute;
    }

    .memory-card.-active .card {
      display: none;
    }

    .memory-card.-active .card.-front {
      display: flex;
    }

    .memory-card .card.-front {
      background-color: #fff;
    }

    .memory-card .card.-front::before {
      content: "";
      width: 95px;
      height: 95px;
      background-color: #d4d4d4;
      border-radius: 50%;
      position: absolute;
    }

    .memory-card .card > .icon {
      width: 100px;
      height: 100px;
    }

    .memory-card .card.-front > .icon {
      position: absolute;
      transform: translateY(-12px);
    }
  `;

  $head.insertBefore($style, null);

  return ({ src, alt, nameClass }) => `
    <div class="memory-card" onClick="handleClick(this)">
      <article class="card -front">
        <img 
          src="${src}"
          alt="${alt}" 
          class="icon"
        />
      </article>
      <article class="card">
        <img 
          src="img/icon-collabcode.png"
          alt="O mascote da CollbaCode o Gueio" 
          class="icon"
        />
      </article>
    </div>
  `;
}

let score = 0;
const handleClick = $component => {
  if (!$component.classList.contains("-active")) {
    if (qtdActiveMemoryCard < 2) {
      $component.classList.toggle("-active");
    }

    console.log("Valor de qtdActiveMemoryCard:", qtdActiveMemoryCard);

    if (qtdActiveMemoryCard === 1) {
      const $memoryCards = document.querySelectorAll(".memory-card.-active");

      if (
        $memoryCards[0].querySelector(".-front .icon").getAttribute("src") ===
        $memoryCards[1].querySelector(".-front .icon").getAttribute("src")
      ) {
        // score = score + 1;
        score++;
        console.log("Value score:", score);
        console.log("DENTRO");
      } else {
        setTimeout(() => {
          const $activeMemoryCards = document.querySelectorAll(
            ".memory-card.-active"
          );

          $activeMemoryCards.forEach($memoryCard => {
            $memoryCard.classList.remove("-active");
          });
        }, 1500);
        qtdActiveMemoryCard = 0;
      }
    }
  }
};
