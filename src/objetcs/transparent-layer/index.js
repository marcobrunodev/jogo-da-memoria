const transparentLayer = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");


    $style.textContent = `
      .tranparent-layer {
        background-color: rgb(58, 64, 66, 0.7);

      }
    `

    $head.insertBefore($style, null);
  }

  module.render = () => {
    module._style()

    return `
      <div class="tranparent-layer"></div>
    `
  }

  return {
    render: module.render
  }
})()