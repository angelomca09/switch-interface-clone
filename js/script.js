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
  const AMPM = time.slice(time.length - 2, time.length);

  timeElement.innerHTML = `${hoursAndMinutes}<small> ${AMPM}</small>`;
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

//#region Carousel
const carousel = document.querySelector(".carousel");

let isDragStart = false,
  prevPageX,
  prevScrollLeft;

function dragStart(e) {
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
}

function dragStop() {
  isDragStart = false;
}

function dragging(e) {
  if (!isDragStart) return;
  e.preventDefault();
  let positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);
//#endregion
