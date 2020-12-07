//* Javascript Service box *//

const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

//* Javascript tidsbox *//

const tidselected = document.querySelector(".tidselected");
const tidsoptionsContainer = document.querySelector(".tid-options-container");

const tidsoptionsList = document.querySelectorAll(".tidsoption");

tidselected.addEventListener("click", () => {
  tidsoptionsContainer.classList.toggle("active");
});

tidsoptionsList.forEach(p => {
  p.addEventListener("click", () => {
    tidselected.innerHTML = p.querySelector("label").innerHTML;
    tidsoptionsContainer.classList.remove("active");
  });
});

