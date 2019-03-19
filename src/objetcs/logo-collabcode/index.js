const logoCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .logo-collabcode {
        width: 175px;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = () => {
    module._style();

    return `<img class="logo-collabcode" src="/img/icon-collabcode.png">`;
  };

  return {
    render: module.render
  };
})();
