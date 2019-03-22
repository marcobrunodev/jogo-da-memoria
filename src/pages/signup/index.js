(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Log in", false);
  const $signupButton = flatButton.render("Sign up", true);
  const $logoCollabcode = logoCollabcode.render();
  const $titleCollabcode = titleCollabcode.render("Welcome!");
  const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);

  const $emailLabel = labelCollabcode.render("E-mail");
  const $emailInput = inputCollabcode.render();

  const $usernameLabel = labelCollabcode.render("Username");
  const $usernameInput = inputCollabcode.render();

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $usernameLabel);
  $root.insertAdjacentHTML("beforeend", $usernameInput);
  $root.insertAdjacentHTML("beforeend", $emailLabel);
  $root.insertAdjacentHTML("beforeend", $emailInput);
})();
