// Фоновые картинки лежат локально в папке backgrounds/ (скачаны заранее с Wikimedia Commons),
// поэтому работают без интернета. Внешние сервисы (picsum.photos, loremflickr.com)
// из нашего региона не открываются.
const backgrounds = [
  "backgrounds/bg1.jpg",
  "backgrounds/bg2.jpg",
  "backgrounds/bg3.jpg",
  "backgrounds/bg4.jpg",
  "backgrounds/bg5.jpg",
  "backgrounds/bg6.jpg",
  "priroda20.jpeg"
];

let currentIndex = -1;

const bgButton = document.getElementById("change-bg-btn");
const reloadButton = document.getElementById("reload-btn");
const greetingEl = document.querySelector("h3");
const timeEl = document.querySelector("h1");

// Смена фона: пробуем следующую картинку из списка.
// Если она не загрузилась (событие onerror) — автоматически переходим к следующей,
// но не более длины списка за раз, чтобы не зациклиться при отсутствии сети.
function changeBackground() {
  let tries = 0;

  function tryNext() {
    if (tries >= backgrounds.length) {
      return; // все картинки недоступны — оставляем текущий фон
    }
    tries++;
    currentIndex = (currentIndex + 1) % backgrounds.length;
    const src = backgrounds[currentIndex];
    const img = new Image();
    img.onload = function () {
      document.body.style.backgroundImage = `url('${src}')`;
    };
    img.onerror = tryNext;
    img.src = src;
  }

  tryNext();
}

// Обновление часов
function updateClock() {
  timeEl.textContent = "Сейчас " + new Date().toLocaleTimeString();
}

// Логика для отображения имени
let name1 = localStorage.getItem("my-name");
if (!name1) {
  name1 = prompt("Как вас зовут?");
  if (name1) {
    localStorage.setItem("my-name", name1);
  } else {
    // Если пользователь нажал "Отмена" или ничего не ввёл
    name1 = "Гость";
  }
}
greetingEl.textContent = "Привет, " + name1 + "!";

// Назначаем обработчики событий на кнопки
bgButton.onclick = changeBackground;
reloadButton.onclick = function () {
  location.reload();
};

// Показываем время сразу и обновляем каждую секунду
updateClock();
setInterval(updateClock, 1000);