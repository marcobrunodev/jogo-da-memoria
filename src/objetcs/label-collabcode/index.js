const labelCollabcode = (function() {
  const module = {};

  module.render = content => `<label>${content}</label>`;

  return {
    render: module.render
  };
})();
