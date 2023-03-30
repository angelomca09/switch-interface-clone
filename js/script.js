console.log("All Rigths Reserved to Nintendo.");

//#region Time
const timeElement = document.querySelector("#time");
function getTime() {
  const time = new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const hoursAndMinutes = time.slice(0, 5);
  const AMPM = time.slice(5, 7);

  timeElement.innerHTML = `${hoursAndMinutes}<small>${AMPM}</small>`;
}
getTime();

const interval = setInterval(() => {
  getTime();
}, 1000);
//#endregion

//#region Commands
const options = document.querySelector("#options");
const start = document.querySelector("#start");
const ok = document.querySelector("#ok");

function onHoverIcon() {
  ok.classList.add("active");
}
function onHoverGame() {
  options.classList.add("active");
  start.classList.add("active");
}
function onLeaveGame() {
  options.classList.remove("active");
  start.classList.remove("active");
  ok.classList.remove("active");
}

document.querySelectorAll(".game-card").forEach((el) => {
  el.addEventListener("mouseover", onHoverGame);
  el.addEventListener("mouseleave", onLeaveGame);
});

document.querySelectorAll(".avatar-box, .option-card").forEach((el) => {
  el.addEventListener("mouseover", onHoverIcon);
  el.addEventListener("mouseleave", onLeaveGame);
});
//#endregion
