const flatButton = (function() {
  const module = {};

  module._style = active => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .flat-button {
        background-color: ${active ? "#f25a70" : "#eae6da"};
        color: ${active ? "#fff" : "#fffcee"};
        font-size: 24px;
        font-weight: bold;
        width: 50%;
        height: 176px;
        text-transform: uppercase;
      }
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = (content = "", active = false) => {
    module._style(active);

    return `<button class="flat-button">${content}</button>`;
  };

  return {
    render: module.render
  };
})();
