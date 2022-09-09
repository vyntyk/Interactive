let name;
if (localStorage.getItem("my-name")) {
  name = localStorage.getItem("my-name");
} else {
  name = prompt("Как вас зовут?");
  localStorage.setItem("my-name", name);
}

document.querySelector("h3").textContent = "Привет, " + name;
document.querySelector("h1").textContent =
  "Сейчас " + new Date().toLocaleTimeString();

setInterval(function () {
  document.querySelector("h1").textContent =
    "Сейчас " + new Date().toLocaleTimeString();
}, 1000);

const colors = ["indigo", "green", "orange", "blue"];
let index = 0;
document.querySelector("Button").onclick = function () {
  document.body.style.background = colors[index];
  index++;
  if (index >= colors.length) index = 0;
};
