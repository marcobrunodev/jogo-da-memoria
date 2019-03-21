const flatButton = (function() {
  const module = {};

  module._id = 0;

  module._style = active => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .flat-button-${module._id} {
        box-sizing: border-box;
        display: inline-block;
        text-decoration: none;
        text-align: center;
        background-color: ${active ? "#f25a70" : "#eae6da"};
        color: ${active ? "#fff" : "#fffcee"};
        font-size: 24px;
        font-weight: bold;
        width: 50%;
        padding-top: 60px;
        height: 176px;
        text-transform: uppercase;
      }
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = (content = "", active = false) => {
    module._id++;
    module._style(active);

    return `<a  href="#" class="flat-button-${module._id}">${content}</a>`;
  };

  return {
    render: module.render
  };
})();
