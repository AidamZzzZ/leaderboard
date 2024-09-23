// Signal
const signal = document.querySelector(".signal");

// Button
const button = document.querySelector(".add-player");

// Inputs
const name = document.querySelector("#first-name");
const lName = document.querySelector("#last-name");
const country = document.querySelector("#country");
const pS = document.querySelector("#player-score");

const form = document.querySelector("form");
const ul = document.querySelector(".table-scores");

const players = [
  {
    name: "MARTHA YOHANES",
    country: "FINLAND",
    score: 85,
  },
  {
    name: "DAVID SMITH",
    country: "UNITED KIMDOM",
    score: 80,
  },
  {
    name: "ASABENEH YETAYEH",
    country: "FINLAND",
    score: 75,
  },
  {
    name: "MATHIAS ELIAS",
    country: "SWEDEN",
    score: 70,
  },
];

// Events

function renderLeaderboard() {
  const now = new Date();
  let day = now.getDay();
  let year = now.getFullYear();
  let hour = now.getHours();
  let minutes = now.getMinutes();

  players.sort((a, b) => b.score - a.score);

  ul.innerHTML = "";

  players.forEach((player, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <li class="score">
          <p class="full-name">${player.name} <span class="date">SEP ${day}, ${year} ${hour}:${minutes}</span></p>
          <p class="country"><span>${player.country}</span></p>
          <p class="ps">${player.score}</p>
          <div class="actions">
            <button class="del" onclick="removePlayer(${index})"><box-icon name='trash' size="xs"></box-icon></button>
            <button class="plus" onclick="changeScore(${index}, 5)">+5</button>
            <button class="minor" onclick="changeScore(${index}, -5)">-5</button>
          </div>
        </li>`;

    ul.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fullName = document.querySelector("#first-name");
  const country = document.querySelector("#country");
  const ps = document.querySelector("#player-score");

  if (
    name.value === "" ||
    lName.value === "" ||
    country.value === "" ||
    pS.value === ""
  ) {
    signal.innerHTML = "All fields are required";
  } else {
    signal.innerHTML = "";
    players.push({
      name: fullName.value.toUpperCase(),
      country: country.value.toUpperCase(),
      score: parseInt(ps.value),
    });
  }

  form.reset();

  renderLeaderboard();
});

function changeScore(index, value) {
  players[index].score += value;
  renderLeaderboard();
}

function removePlayer(index) {
  players.splice(index, 1);
  renderLeaderboard();

  // const li = document.querySelector("li");

  if (players.length === 0) {
    signal.textContent = "Add Players";
  } else {
    signal.textContent = "";
  }
}

renderLeaderboard();
