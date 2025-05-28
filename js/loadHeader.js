fetch("../partials/header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header-container").innerHTML = data;
  });

document.addEventListener("DOMContentLoaded", function () {
  fetch("../partials/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;

      // Now check login status and update the nav
      const user = JSON.parse(localStorage.getItem("loggedInUser"));

      const loginNav = document.querySelector(".nav-login");
      if (user && loginNav) {
        loginNav.textContent = "Logout";
        loginNav.href = "#"; // Prevent navigation

        loginNav.addEventListener("click", function (e) {
          e.preventDefault();
          localStorage.removeItem("loggedInUser");
          alert("You have been logged out.");
          window.location.href = "login.html"; // Or refresh to reflect change
        });
      }
    });
});
