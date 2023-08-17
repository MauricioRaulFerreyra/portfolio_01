/*-------   Menu ------- */

((d) => {
  const $menuButton = d.querySelector(".menu-button"),
    $menu = d.querySelector(".menu"),
    $menuItems = d.querySelectorAll(".menu a"),
    $contactButton = d.querySelector(".button-contact");

  $menuButton.addEventListener("click", () => {
    $menuButton.classList.toggle("open");
    $menu.classList.toggle("open");
  });

  $menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      $menuButton.classList.remove("open");
      $menu.classList.remove("open");
    });
  });

  $contactButton.addEventListener("click", function () {
    window.location.hash = "#contact";
  });
})(document);
