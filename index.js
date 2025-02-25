// Массив с ID изображений от Picsum
const imageIds = [
  "100", "101", "102", "103", "104", "115", "106", "107", "108", "109", "110", '111'
];

let currentImageIndex = 0;

// Функция для смены фона
function changeBackground() {
  currentImageIndex = (currentImageIndex + 1) % imageIds.length;
  const imageId = imageIds[currentImageIndex];
  document.body.style.backgroundImage = `url('https://picsum.photos/id/${imageId}/1920/1080')`;
}

// Назначаем обработчик события на кнопку
document.querySelector("button").onclick = changeBackground;

// Логика для отображения имени и времени
let name1;
if (localStorage.getItem("my-name")) {
  name1 = localStorage.getItem("my-name");
} else {
  name1 = prompt("Как вас зовут?");
  localStorage.setItem("my-name", name1);
}

document.querySelector("h3").textContent = "Привет, " + name1 + "!";
document.querySelector("h1").textContent = "Сейчас " + new Date().toLocaleTimeString();

setInterval(function () {
  document.querySelector("h1").textContent = "Сейчас " + new Date().toLocaleTimeString();
}, 1000);

// Устанавливаем начальное фоновое изображение
changeBackground();