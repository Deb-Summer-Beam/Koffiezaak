const afbeelding = document.querySelector(".draai-afbeelding");

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