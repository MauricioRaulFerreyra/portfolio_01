document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-button");
  const menu = document.querySelector(".menu");
  const menuItems = document.querySelectorAll(".menu a");
  const contactButton = document.querySelector(".button-contact");

  menuButton.addEventListener("click", function () {
    menuButton.classList.toggle("open");
    menu.classList.toggle("open");
    contactButton.classList.toggle("open");
  });

  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      menuButton.classList.remove("open");
      menu.classList.remove("open");
    });
  });

  contactButton.addEventListener("click", function () {
    window.location.hash = "#contact";
  });
});
