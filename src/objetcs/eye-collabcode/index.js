const eyeCollabcode = (function() {
    const module = {};

    module._style = () => {};

    module.render = () => `
        <label>Mostrar senha</label>
    `;

    return {
        render: module.render
    }
})();