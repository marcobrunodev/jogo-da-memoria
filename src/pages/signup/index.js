(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Log in", true);
  const $signupButton = flatButton.render("Sign up");

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
})();
