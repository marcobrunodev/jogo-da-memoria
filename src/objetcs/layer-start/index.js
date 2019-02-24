const layerStart = (function() {
  const module = {};

  module.handleClick = $component => {
    const $gameButton = $component.querySelector(".game-button");
    const $transparencyLayer = $component.querySelector(".transparency-layer");

    $gameButton.classList.add("-disable");
    $transparencyLayer.classList.add("-disable");

    // setTimeout(() => {
    //   $component.remove();
    // }, 2300);
  };

  module.handleTransitionEnd = (event, $component) => {
    if (event.target.classList.contains("transparency-layer")) {
      $component.remove();
    }
  };

  module.render = content => {
    const $transparencyLayer = transparencyLayer.render();
    const $gameButton = gameButton.render(content);

    return `
      <div class="layer-start" onClick="layerStart.handleClick(this)" onTransitionEnd="layerStart.handleTransitionEnd(event, this)">
        ${$transparencyLayer}
        ${$gameButton}
      </div>
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick,
    handleTransitionEnd: module.handleTransitionEnd
  };
})();
