// Draai de afbeelding wanneer erop wordt geklikt
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


// Toon of verberg de gebaklijst
const menuKnop = document.querySelector(".menu-knop");
const gebakLijst = document.querySelector("#gebak-lijst");

if (menuKnop && gebakLijst) {
  menuKnop.addEventListener("click", function () {
    gebakLijst.hidden = !gebakLijst.hidden;

    menuKnop.setAttribute(
      "aria-expanded",
      String(!gebakLijst.hidden)
    );
  });
}