const status404 = (function () {
    const $root = document.querySelector("#root");

    const $h1 = document.createElement('h1');
    $h1.textContent = "404";

    $root.insertAdjacentHTML("beforeend", `<h1>404</h1>`);
})