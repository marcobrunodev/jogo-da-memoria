const flatButton = (function() {
  const module = {};

  module.render = () => `
    <button>Login</button>
  `;

  return {
    render: module.render
  };
})();
