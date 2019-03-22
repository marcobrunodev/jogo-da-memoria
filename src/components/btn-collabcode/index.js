const btnCollabcode = (function() {
  const module = {};

  module.render = content => `<input type="submit" value=${content}>`;

  return {
    render: module.render
  };
})();
