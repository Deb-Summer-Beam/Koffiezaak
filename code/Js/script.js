// Rotate the coffee image
const afbeelding = document.querySelector(".draai-afbeelding");

if (afbeelding) {
  afbeelding.addEventListener("click", function () {
    afbeelding.animate(
      [
        { transform: "rotate(0deg)" },
        { transform: "rotate(360deg)" }
      ],
      {
        duration: 1000,
        iterations: 1
      }
    );
  });
}


// Hide or show the drinks and pastries lists
const menuKnoppen = document.querySelectorAll(".menu-knop");

menuKnoppen.forEach(function (menuKnop) {
  const lijstId = menuKnop.getAttribute("aria-controls");
  const lijst = document.getElementById(lijstId);

  if (lijst) {
    menuKnop.addEventListener("click", function () {
      lijst.hidden = !lijst.hidden;

      menuKnop.setAttribute(
        "aria-expanded",
        String(!lijst.hidden)
      );
    });
  }
});