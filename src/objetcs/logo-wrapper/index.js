const logoWrapper = (function() {
  const module = {};

  module.render = (...$children) => `
    <div class="avatarWrapper">
      ${$children.join("")} 
    </div>
  `;

  return {
    render: module.render
  };
})();
