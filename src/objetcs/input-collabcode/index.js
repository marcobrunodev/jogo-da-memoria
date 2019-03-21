const inputCollabcode = (function() {
  const module = {};

  module.render = () => `<input type="email" />`;

  return {
    render: module.render
  };
})();
