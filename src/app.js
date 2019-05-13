(function () {
    const {hash} = window.location;

    if (hash === "#/signup") {
        signup();
    } else {
        login();
    }
})();