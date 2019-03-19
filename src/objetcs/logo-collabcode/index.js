const logoCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .logo-collabcode {
        background-color: white;
        display: inline-block;
        width: 175px;
        border: solid 40px white;
        border-radius: 50%;
      }
      .logo-collabcode > .logo {
        width: 175px;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = () => {
    module._style();

    return `
      <figure class="logo-collabcode">
        <img class="logo" src="/img/icon-collabcode.png">
      </figure>
    `;
  };

  return {
    render: module.render
  };
})();
