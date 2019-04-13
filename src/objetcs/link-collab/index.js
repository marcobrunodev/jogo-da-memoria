const linkCollab = (function() {
  const module = {};

  module._style = () => {};

  module.render = ({ href, content }) => {
    module._style();

    return `
      <a href="${href}">${content}</a>
    `;
  };

  return {
    render: module.render
  };
})();
