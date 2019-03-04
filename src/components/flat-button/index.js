const flatButton = (function() {
  const module = {};

  module.render = () => `
    <button style="font-size: 40px;">Login</button>
  `;

  return {
    render: module.render
  };
})();
