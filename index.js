let name1;
if (localStorage.getItem("my-name")) {
  name1 = localStorage.getItem("my-name");
} else {
  name1 = prompt("Как вас зовут?");
  localStorage.setItem("my-name", name1);
}

document.querySelector("h3").textContent = "Привет, " + name1 + "!";
document.querySelector("h1").textContent =
  "Сейчас " + new Date().toLocaleTimeString();

setInterval(function () {
  document.querySelector("h1").textContent =
    "Сейчас " + new Date().toLocaleTimeString();
}, 1000);

document.querySelector("Button").onclick = function () {
  document.body.style.backgroundImage = "url('priroda20.jpeg')";
 };
