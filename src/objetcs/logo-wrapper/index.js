const logoWrapper = (function() {
  const module = {};

  module.render = ($children1, $children2) => `
    <div class="avatarWrapper">
      ${$children1} 
      ${$children2}
    </div>
  `;

  return {
    render: module.render
  };
})();
