(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render();
  const $signupButton = flatButton.render();

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
})();
