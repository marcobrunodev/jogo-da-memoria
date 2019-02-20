const gameButton = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .game-button {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        position: absolute;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();

    return `
      <button class="game-button">Start</button>
    `;
  };

  return {
    render: module.render
  };
})();
