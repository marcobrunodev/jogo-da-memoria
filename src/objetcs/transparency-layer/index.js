const transparencyLayer = (function () {
  const module = {};

  module._style = () => {

  }

  module.render = () => `
    <div class="transparency-layer"></div>
  `;

  return {
    render: module.render
  }
})()