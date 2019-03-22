const formSignup = (function() {
  const module = {};

  module._children = () => {
    const $emailLabel = labelCollabcode.render("E-mail");
    const $emailInput = inputCollabcode.render();

    const $usernameLabel = labelCollabcode.render("Username");
    const $usernameInput = inputCollabcode.render();

    const $passwordLabel = labelCollabcode.render("Password");
    const $passwordInput = inputCollabcode.render();

    const $confirmPasswordLabel = labelCollabcode.render("Confirm password");
    const $confirmPasswordInput = inputCollabcode.render();

    return `
      ${$emailLabel}
      ${$emailInput}

      ${$usernameLabel}
      ${$usernameInput}

      ${$passwordLabel}
      ${$passwordInput}

      ${$confirmPasswordLabel}
      ${$confirmPasswordInput}
    `;
  };

  module.render = () =>
    `<form action="" method="POST">${module._children()}</form>`;

  return {
    render: module.render
  };
})();
