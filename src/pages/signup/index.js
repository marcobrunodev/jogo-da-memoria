(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Log in", false);
  const $signupButton = flatButton.render("Sign up", true);
  const $avatarWrapper = avatarWrapper.render();
  const $logoCollabcode = logoCollabcode.render();
  const $titleCollabcode = titleCollabcode.render("Welcome!");

  console.log($avatarWrapper);

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $logoCollabcode);
  $root.insertAdjacentHTML("beforeend", $titleCollabcode);
})();
