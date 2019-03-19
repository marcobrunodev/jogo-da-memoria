const logoWrapper = (function() {
  const module = {};

  module.render = $children => `<div class="avatarWrapper">${$children}</div>`;

  return {
    render: module.render
  };
})();
