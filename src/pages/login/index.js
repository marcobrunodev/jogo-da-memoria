(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Log in", true);
  const $signupButton = flatButton.render("Sign up", false);

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
})();
