const randomGen = document.getElementById("random-gen");
randomGen.addEventListener("click", randomTextGenerator);

function randomTextGenerator() {
  const text = ["text", "text2", "text3", "text4"];

  const index = Math.floor(Math.random() * 4);
  const phrase = document.getElementById("change-text");

  phrase.innerHTML = text[index];
  phrase.style.display = "block";
}

function showDetails(value) {
  const details = document.getElementById(`project-${value}`);
  details.style.display = "block";
}
const project1 = document.getElementById("project-1-header");
const project2 = document.getElementById("project-2-header");
const project3 = document.getElementById("project-3-header");

project1.addEventListener("click", () => showDetails(1));
project2.addEventListener("click", () => showDetails(2));
project3.addEventListener("click", () => showDetails(3));

// function showDetails() {
//   const details = document.getElementById("project-3");
//   details.style.display = "block";
// }

function getCurrentYear() {
  const date = new Date().getFullYear();
  const year = document.getElementById("year");
  year.innerHTML = date;
}
getCurrentYear();
