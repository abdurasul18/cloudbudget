let controller = document.querySelector(".controller");
let video = document.querySelector("#myVideo");
let pauseSrc = "./images/svg/pause-icon.svg";
let playSrc = "./images/svg/play-icon.svg";
controller.addEventListener("click", function () {
  controller.classList.add("play");
  setTimeout(() => {
    controller.querySelector("img").src = pauseSrc;
    video.play();
    video.setAttribute("controls", "controls");
    controller.style.opacity = 0;
  }, 1000);
});
function pauseVideo() {
    controller.style.opacity = 1;
    setTimeout(() => {
      video.removeAttribute("controls");
      controller.querySelector("img").src = playSrc;
      controller.classList.add("puase");
    }, 200);
    setTimeout(() => {
      controller.classList.remove("puase");
      controller.classList.remove("play");
    }, 1000);
}

///////////////////

document.querySelector('.lang-select').addEventListener('click', function () {
  document.querySelector('.lang-drop').classList.toggle('open')
})

