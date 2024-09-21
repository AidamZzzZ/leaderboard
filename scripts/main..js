// Signal
const signal = document.querySelector(".signal");

// Button
const button = document.querySelector(".add-player");

// Inputs
const name = document.querySelector("#first-name");
const lName = document.querySelector("#last-name");
const country = document.querySelector("#country");
const pS = document.querySelector("#player-score");

// Div and Divfather
const ul = document.querySelector(".table-scores");
let li;
let p1;
let p2;
let p3;
let p4;
let divB;
let btn1;
let btn2;
let btn3;
let span;
let btns;

// Events
button.addEventListener("click", () => {
  if (
    name.value === "" ||
    lName.value === "" ||
    country.value === "" ||
    pS.value === ""
  ) {
    signal.innerHTML = "All fields are required";
  } else {
    signal.innerHTML = "";
    // Creando el elemennnto li y añadiendolo a la clase padre
    li = document.createElement("li");
    li.setAttribute("class", "score");
    ul.append(li);

    // Creamos los valores que van dentro del elemento li
    p1 = document.createElement("p");
    p1.setAttribute("class", "full-name");
    p1.innerText =
      name.value.toUpperCase() + " " + lName.value.toUpperCase() + " ";
    p2 = document.createElement("p");
    p2.setAttribute("class", "country");
    p2.innerHTML = country.value.toUpperCase();
    p3 = document.createElement("p");
    p3.setAttribute("class", "ps");
    p3.innerHTML = parseInt(pS.value);
    li.appendChild(p1);
    li.appendChild(p2);
    li.appendChild(p3);
    li.appendChild(addDeleteBtn());
    li.appendChild(addPlusBtn());
    li.appendChild(minorPlusBtn());

    // reseteando inputs
    name.value = "";
    lName.value = "";
    country.value = "";
    pS.value = "";
  }
});

// ADD BUTTONS
function addDeleteBtn() {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "del";
  deleteBtn.className = "del";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const li = document.querySelectorAll(".scores");
    const message = document.querySelector(".message");

    if (li.length === 0) {
      message.innerHTML = "Add Players";
    } else {
      message.innerHTML = "";
    }
  });
  return deleteBtn;
}

function addPlusBtn() {
  const plusBtn = document.createElement("button");
  plusBtn.setAttribute("class", "plus");
  plusBtn.textContent = "+5";

  plusBtn.addEventListener("click", function () {
    const scoreE = this.parentElement.querySelector(".ps");

    let currentScore = parseInt(scoreE.textContent);

    currentScore += 5;
    scoreE.textContent = currentScore;
  });
  return plusBtn;
}

function minorPlusBtn() {
  const minorBtn = document.createElement("button");
  minorBtn.className = "minor";
  minorBtn.textContent = "-5";

  minorBtn.addEventListener("click", function () {
    const scoreE = this.parentElement.querySelector(".ps");

    let currentScore = parseInt(scoreE.textContent);

    currentScore -= 5;
    scoreE.textContent = currentScore;
  });
  return minorBtn;
}

const entries = Array.from();

// Limpiar el leaderboard y reordenar los elementos
// ul.innerHTML = "";
