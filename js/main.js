/* ---- we have this code from a 3rd party client, look in literaturlist ---- */

/*Comment made on our own.*/

/* Javascript Service box */

/* Creating 3 variables, selected, optionsContainer, optionsList, with queryselector, select the elements from the html. */
/*jshint esversion: 6 */
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");

/* Adds an eventlister on the selected variable with click function. When clicked on, the variable optionsContainers list will be toogled active and become visible. */
selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
});
/* the for each function here, runs through the optionsList variables objects and adds the eventlister on each object with the click function */
optionsList.forEach(o => {
    o.addEventListener("click", () => {
        /* Changes the variable selected's inner HTML to inner HTML of the chosen label from the list */
        selected.innerHTML = o.querySelector("label").innerHTML;
        /* After the selected's inner html is changed, the active on optionsContainer will be removed and the list is no longer visible*/
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
