const layerStart = (function() {
  const module = {};

  module.handleClick = $component => {
    const $gameButton = $component.querySelector(".game-button");
    const $transparencyLayer = $component.querySelector(".transparency-layer");

    $gameButton.classList.add("-disable");
    $transparencyLayer.classList.add("-disable");
  };

  module.render = content => {
    const $transparencyLayer = transparencyLayer.render();
    const $gameButton = gameButton.render(content);

    return `
      <div class="layer-start" onClick="layerStart.handleClick(this)">
        ${$transparencyLayer}
        ${$gameButton}
      </div>
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
