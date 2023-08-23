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

/* ********** ContactForm ********** */
((d) => {
  const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/mauriciotauro82@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        location.hash = "#thank-you";
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.statusText || "An error occurred while sending, please try again";
        $response.querySelector(
          "h3"
        ).innerHTML = `Error ${err.status}: ${message}`;
      })
      .finally(() => {
        $loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
})(document);