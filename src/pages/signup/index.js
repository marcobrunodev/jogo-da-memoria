(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Log in", false);
  const $signupButton = flatButton.render("Sign up", true);

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
})();
